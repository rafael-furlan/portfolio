function OpenMenu() {
    const menuHTML = `
    <div class="menu-body">
        <header class="menu-top-bar">
            <div class="close-menu">
                <a onclick="CloseMenu()">Close</a>
            </div>
        </header>

        <div class="menu-list">
            <div class="list-item-1">
                <a href="https://rafaelfurlan.vercel.app/">
                    <h2>SWork</h2>
                </a>
            </div>
            <div class="list-item-2">
                <a href="#shots">
                    <h2>Shots</h2>
                </a>
                
            </div>
            <div class="list-item-3">
                 <a href="#contact">
                    <h2>Contact</h2>
                </a>
            </div>
        </div>

        <div class="menu-footer">
                <div class="out-item">
                    <a href="https://www.linkedin.com/in/rafaelfurlan98/" target="_blank">
                        <img src=".//Resources/images/BT Icon/linkedin.svg" alt="LinkedIn Profile" width="24" height="24">
                    </a>
                </div>
                <div class="out-item">
                    <a href="https://github.com/rafael-furlan" target="_blank">
                        <img src=".//Resources/images/BT Icon/github.svg" alt="LinkedIn Profile" width="24" height="24">
                    </a>
                </div>
                 <div class="out-item">
                    <a href="https://dribbble.com/rafaell_furlan" target="_blank">
                        <img src=".//Resources/images/BT Icon/dribbble.svg" alt="LinkedIn Profile" width="24" height="24">
                    </a>
                </div>
        </div>
    </div>
    `;
    
    // IMPORTANTE: Esta linha estava faltando!
    document.body.insertAdjacentHTML('beforeend', menuHTML);
}

function CloseMenu() {
    const menu = document.querySelector('.menu-body');
    if (menu) {
        menu.remove();
    }
}