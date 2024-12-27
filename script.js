function replaceText() {
    const inputText = document.getElementById('inputText').value;
    const findWord = document.getElementById('findWord').value;
    const replaceWord = document.getElementById('replaceWord').value;

    if (!findWord || !replaceWord) {
        document.getElementById('status').innerText = 'Please enter both find and replace words.';
        return;
    }

    const updatedText = inputText.split(findWord).join(replaceWord);
    document.getElementById('outputText').value = updatedText;

    const replacedCount = (inputText.split(findWord).length - 1);
    document.getElementById('status').innerText = `Replaced ${replacedCount} occurrence(s).`;
}

function clearFields() {
    document.getElementById('inputText').value = '';
    document.getElementById('findWord').value = '';
    document.getElementById('replaceWord').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('status').innerText = '';
}
