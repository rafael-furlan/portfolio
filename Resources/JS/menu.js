function OpenMenu() {
    const menuHTML = `
    <div class="menu-body" style="
        height: 100dvh;
        width: 100vw;
        background-color: var(--neutral-color-1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        padding-bottom: env(safe-area-inset-bottom, 20px);
    ">
        <header class="menu-top-bar" style="
            background-color: var(--neutral-color-1);
            backdrop-filter: blur(300px);
            border-bottom: 1px solid var(--neutral-color-5);
            height: 65px;
            display: flex;
            justify-content: flex-end;
            position: fixed;
            width: 100vw;
            z-index: 1001;
        ">
            <div class="close-menu" style="
                display: flex; 
                align-items: center;
                height: 100%;
            ">
                <a onclick="CloseMenu()" style="
                    text-decoration: none;
                    color: var(--neutral-color-8);
                    height: 100%;
                    padding: 0 20px; 
                    display: flex; 
                    align-items: center;
                    cursor: pointer;
                ">Close</a>
            </div>
        </header>

        <div class="menu-list" style="
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 65px;
        ">
            <div class="list-item-1" style="margin: 20px 0;">
                <h2 style="color: var(--neutral-color-8); font-size: 2rem;">Work</h2>
            </div>
            <div class="list-item-2" style="margin: 20px 0;">
                <h2 style="color: var(--neutral-color-8); font-size: 2rem;">Resume</h2>
            </div>
            <div class="list-item-3" style="margin: 20px 0;">
                <h2 style="color: var(--neutral-color-8); font-size: 2rem;">Contact</h2>
            </div>
        </div>

        <div class="menu-footer" style="
            padding: 20px;
            display: flex;
            justify-content: center;
        ">
            <nav>
                <div class="out-item" style="
                    display: flex;
                    gap: 20px;
                    align-items: center;
                ">
                    <a href="https://www.linkedin.com/in/rafaelfurlan98/" target="_blank">
                        <img src="Resources/images/BT Icon/linkedin.svg" alt="LinkedIn Profile" width="15" height="15">
                    </a>
                    <a href="https://github.com/rafael-furlan" target="_blank">
                        <img src="Resources/images/BT Icon/github.svg" alt="Github Profile" width="15" height="15">
                    </a>
                    <a href="https://dribbble.com/rafaell_furlan" target="_blank">
                        <img src="Resources/images/BT Icon/dribbble.svg" alt="Dribbble Profile" width="15" height="15">
                    </a>
                </div>
            </nav>
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