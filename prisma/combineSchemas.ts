import * as fs from 'fs';
import * as path from 'path';

const MODELS_DIR = path.join(__dirname, 'models');
const OUTPUT_FILE = path.join(__dirname, 'schema.prisma');
const dependencyOrder = ['User', 'Product']; // Adjust based on dependencies

const HEADER = `
// Generated schema.prisma
// Do not edit directly. Update the models in /prisma/models instead.

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or your DB provider
  url      = env("DATABASE_URL")
}
`;

/**
 * Combines all `.prisma` files in the `models` directory into a single `schema.prisma` file.
 */
const combineSchemas = (): void => {
  try {
    // Check if the models directory exists
    if (!fs.existsSync(MODELS_DIR)) {
      throw new Error(`Models directory not found: ${MODELS_DIR}`);
    }

    // Get all `.prisma` files in the models directory
    const files: string[] = fs
      .readdirSync(MODELS_DIR)
      .filter((file: string) => file.endsWith('.prisma'));

    if (files.length === 0) {
      throw new Error('No .prisma files found in the models directory.');
    }

    // Sort files based on dependency order
    const sortedFiles = files.sort((a, b) => {
      const aIndex = dependencyOrder.indexOf(a.replace('.prisma', ''));
      const bIndex = dependencyOrder.indexOf(b.replace('.prisma', ''));
      return (
        (aIndex !== -1 ? aIndex : Infinity) -
        (bIndex !== -1 ? bIndex : Infinity)
      );
    });

    console.log('Processing files in order:', sortedFiles);

    // Read and concatenate file contents
    const models: string = files
      .map((file: string) => {
        const filePath = path.join(MODELS_DIR, file);
        console.log(`Reading: ${filePath}`);
        return fs.readFileSync(filePath, 'utf-8');
      })
      .join('\n\n');

    // Combine header and models
    const finalSchema: string = `${HEADER}\n\n${models}`;

    // Write to schema.prisma
    fs.writeFileSync(OUTPUT_FILE, finalSchema, 'utf-8');
    console.log(`Schema combined successfully! Output: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error combining schemas:', (error as Error).message);
    process.exit(1);
  }
};

// Run the script
combineSchemas();
