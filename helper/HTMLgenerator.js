function createManager(manager) {
    return `<div class="card" style="width: 20px;"><div class="card-header">${manager.role}</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: ${manager.name}</li><li class="list-group-item">Email: <a href='mailto:${manager.email}'>${manager.email}</a></li><li class="list-group-item">Employee I.D. Number: ${manager.id}</li><li class="list-item">Office Number: ${manager.officeNumber}</li><li></div><br/>`;
}

function createEngineer(engineer) {
    return `<div class="card" style="width: 20px;"><div class="card-header">${engineer.role}</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: ${engineer.name}</li><li class="list-group-item">Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></li><li class="list-group-item">Employee I.D. Number: ${engineer.id}</li><li class="list-item">Github Name: ${engineer.github}</li><li></div><br/>`;
}

function createIntern(intern) {
    return `<div class="card" style="width: 20px;"><div class="card-header">${intern.role}</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: ${intern.name}</li><li class="list-group-item">Email: <a href='mailto:${intern.email}'>${intern.email}</a></li><li class="list-group-item">Employee I.D. Number: ${intern.id}</li><li class="list-item">School: ${intern.school}</li><li></div><br/>`;
}

function createHTML(manager, engineer, intern) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Sheet</title>
    </head>
    <body>
        <header>
        <h1>Employee Template</h1>
    </header>
    <div class="container" id="manager-container">
        <div class="row" id="manager-row">
            <div class="col" id="manager-column">
                <h3 class="text-center row">Manager</h3>
                <br>
                ${manager.map(createManager).join("\n")}
            </div>
            <div class="col" id="engineer-column">
            <h2 class="text-center row">Engineers</h2>
            <br>
            Employee${engineer.map(createEngineer).join("\n")}
            </div>
            <div class="col" id="intern-col">
            <h2 class="text-center row">Intern</h2>
            <br>
            ${intern.map(createIntern).join("\n")}
            </div>
            </div>
            </div>
            
    </body>
    </html>`;
}

module.exports = {
    createHTML,
    createEngineer,
    createIntern,
    createManager
}