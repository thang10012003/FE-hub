class MCPServer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div
          class="flex flex-col gap-3 items-start text-start p-4 bg-gray-200 dark:bg-white/10 border border-gray-700 dark:border-white/20 dark:shadow-white/10 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-300 transition cursor-pointer transform active:scale-105 hover:scale-105 duration-200 ease-in-out"
        >
          <div class="flex gap-3 flex-row justify-center items-center">
            <div class="w-10 h-10 rounded-full bg-white overflow-hidden">
              <img 
                src="https://byvn.net/qvEC"
                alt="Avatar" 
                class="w-full h-full object-cover"
              >
            </div>
            <h3 class="text-lg font-semibold dark:text-white">
              FastAI
            </h3>
          </div>
          <p class="text-gray-700 text-sm dark:text-white/80 font-normal line-clamp-3">
            Leverage the latest deep learning architectures and techniques.
          </p>
          <div class="rounded-3xl text-xs border border-gray-300 px-2 py-1">
            Official
          </div>
        </div>
    `;
  }
}

customElements.define('mcp-server', MCPServer);
