const vscode = require('vscode');
const fs = require('fs-extra');
const path = require('path');

async function activate(context) {
    let disposable = vscode.commands.registerCommand('gba-dev.createProject', async function () {
        const folderUri = await vscode.window.showOpenDialog({
            canSelectFolders: true,
            canSelectFiles: false,
            canSelectMany: false,
            openLabel: 'Select a folder to create your GBA project'
        });

        if (!folderUri || folderUri.length === 0) return;

        const targetDir = folderUri[0].fsPath;
        const templateDir = path.join(context.extensionPath, 'template');

        try {
            await fs.copy(templateDir, targetDir, { overwrite: false, errorOnExist: false });
            vscode.window.showInformationMessage('New GBA project created in ' + targetDir);
            vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(targetDir), true);
        } catch (err) {
            vscode.window.showErrorMessage('Failed to create project: ' + err.message);
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
