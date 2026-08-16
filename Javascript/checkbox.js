// 1. Seleciona todos os inputs do tipo checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// --- PASSO EXTRA: CARREGAR O PROGRESSO SALVO ---
// Quando a página abre, verificamos se já existe algo salvo na memória
checkboxes.forEach(function(checkbox) {
    // Busca no LocalStorage usando o ID do checkbox como chave
    const statusSalvo = localStorage.getItem(checkbox.id);
    
    // Se o valor salvo for exatamente a palavra "true"
    if (statusSalvo === "true") {
        checkbox.checked = true; // Marca a caixinha fisicamente
        
        // Acha o label correspondente e já aplica a classe de concluído
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (label) {
            label.classList.add('concluido');
        }
    }
});

// --- MONITORAR OS CLIQUES E SALVAR ---
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        
        if (checkbox.checked) {
            label.classList.add('concluido');
            
            // SALVA NA MEMÓRIA: Guarda o estado "true" (marcado) usando o ID como nome
            localStorage.setItem(checkbox.id, "true");
        } else {
            label.classList.remove('concluido');
            
            // SALVA NA MEMÓRIA: Guarda o estado "false" (desmarcado)
            localStorage.setItem(checkbox.id, "false");
        }
    });
});