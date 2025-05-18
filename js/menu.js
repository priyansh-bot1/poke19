<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Menu</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="menu" class="menu">
        <h1>Game Menu</h1>
        <button id="startBtn">Start Game</button>
        <button id="instructionsBtn">Instructions</button>
        <button id="exitBtn">Exit</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
`body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
    color: white;
    font-family: Arial, sans-serif;
}

.menu {
    text-align: center;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
```

JavaScript Functionality
Finally, implement the functionality in `script.js`:

```javascript
document.getElementById('startBtn').addEventListener('click', function() {
    alert('Game Started!');
    // Add your game start logic here
});

document.getElementById('instructionsBtn').addEventListener('click', function() {
    alert('Instructions: Use arrow keys to move and space to jump.');
    // Display instructions or navigate to instructions page
});

document.getElementById('exitBtn').addEventListener('click', function() {
    alert('Exiting the game. Goodbye!');
    // Logic to exit or close the game
});
```
