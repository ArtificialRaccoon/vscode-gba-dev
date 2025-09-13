# vscode-gba-dev – Simple VS Code Extension/Template for GBA Development on Windows

Allows you to quickly **create**, **build**, and **run** GBA projects with **devkitPro** and **mGBA** from inside **VS Code**.

## Requirements

1. Install **devkitPro** from [https://github.com/devkitPro/installer](https://github.com/devkitPro/installer) to the default location (`C:\devkitPro`)
2. Install **mGBA** from [https://github.com/mgba-emu/mgba](https://github.com/mgba-emu/mgba) to the default location (`C:\Program Files\mGBA`)

## Usage

Once installed, you can create a default project by pressing **Ctrl + Shift + P** and selecting **"GBA: Create New Project"**.  
You will be prompted to select a folder for your project, after which a basic GBA project will be created.

### Building

Use **Ctrl + Shift + B** to instantly build the project.  
A **GBA ROM** will be found in the **build** folder.

### Run Build

Press **F5** to instantly rebuild the project and run it in **mGBA**.  
Currently, **no debugger is attached**.
