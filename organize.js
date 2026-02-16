
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = __dirname;
const srcDir = path.join(rootDir, 'src');

console.log('Starting project organization...');

// 1. Ensure src directory exists
if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
    console.log('✅ Created src directory');
}

// 2. Files that should move from root to src
const filesToMove = [
    'index.tsx',
    'App.tsx',
    'types.ts',
    'constants.ts'
];

filesToMove.forEach(file => {
    const srcPath = path.join(rootDir, file);
    const destPath = path.join(srcDir, file);
    
    if (fs.existsSync(srcPath)) {
        // If file already exists in src (which is likely based on your file list),
        // we prioritize the one in src and delete the root duplicate to avoid confusion.
        if (fs.existsSync(destPath)) {
            console.log(`🗑️  Deleting duplicate ${file} from root (keeping src version)`);
            fs.unlinkSync(srcPath);
        } else {
            console.log(`📦 Moving ${file} to src/`);
            fs.renameSync(srcPath, destPath);
        }
    }
});

// 3. Folders that should move from root to src
const foldersToMove = [
    'components',
    'services'
];

foldersToMove.forEach(folder => {
    const srcPath = path.join(rootDir, folder);
    const destPath = path.join(srcDir, folder);
    
    if (fs.existsSync(srcPath)) {
        if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath);
        }
        
        // Move/Check files inside the folder
        const files = fs.readdirSync(srcPath);
        files.forEach(file => {
            const filePath = path.join(srcPath, file);
            const destFilePath = path.join(destPath, file);
            
            if (fs.existsSync(destFilePath)) {
                 console.log(`🗑️  Deleting duplicate ${folder}/${file} from root`);
                 fs.unlinkSync(filePath);
            } else {
                 console.log(`📦 Moving ${folder}/${file} to src/${folder}/`);
                 fs.renameSync(filePath, destFilePath);
            }
        });
        
        // Try to remove the folder if it's empty now
        try {
            if (fs.readdirSync(srcPath).length === 0) {
                fs.rmdirSync(srcPath);
                console.log(`✅ Removed empty ${folder} directory from root`);
            }
        } catch (e) {
            console.log(`⚠️  Could not remove ${folder} from root (might not be empty)`);
        }
    }
});

console.log('🎉 Organization complete! Structure should now be clean.');
