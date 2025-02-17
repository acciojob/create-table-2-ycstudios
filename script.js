function createTable() {
    // Get the table element
    const table = document.getElementById('myTable');
    
    // Prompt for number of rows
    const rows = prompt('Input number of rows');
    if (!rows) return; // Handle cancel
    
    // Prompt for number of columns
    const cols = prompt('Input number of columns');
    if (!cols) return; // Handle cancel
    
    // Convert inputs to numbers
    const rn = parseInt(rows);
    const cn = parseInt(cols);
    
    // Validate inputs
    if (isNaN(rn) || isNaN(cn)) {
        return; // Silently ignore non-numeric values
    }
    
    if (rn <= 0 || cn <= 0) {
        alert('Please enter positive numbers');
        return;
    }
    
    // Clear existing table content
    table.innerHTML = '';
    
    // Create the table
    for (let i = 0; i < rn; i++) {
        // Create row
        const row = table.insertRow();
        
        for (let j = 0; j < cn; j++) {
            // Create cell
            const cell = row.insertCell();
            // Set cell content
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}