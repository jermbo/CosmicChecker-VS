"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "cosmic-checker-vs" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand("extension.checkFile", () => {
        // The code you place here will be executed every time your command is executed
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No Active Editor");
            return;
        }
        const doc = editor.document;
        const start = new vscode.Position(9, 0);
        const end = new vscode.Position(10, 0);
        const text = doc.getText(new vscode.Range(start, end));
        const check = "<H1>HELLO   </h1>";
        console.log(normalize(text));
        console.log(normalize(check));
        console.log(normalize(text) == normalize(check));
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function normalize(txt) {
    return txt.toLowerCase().trim();
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map