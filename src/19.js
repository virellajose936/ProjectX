function addNode(nodeData) {
    const newNode = document.createElement("div");
    newNode.textContent = JSON.stringify(nodeData);
    document.getElementById("nodes").appendChild(newNode);
}

// Example usage
addNode({ id: 1, name: "John", age: 20 });
