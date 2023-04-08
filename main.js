function dragstart(event) {
    event.dataTransfer.setData("text/plain", event.target.innerText);
}
