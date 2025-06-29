# Script PowerShell para inicializar, commitar e fazer push para o GitHub

# Inicializa o repositório git se não existir
git rev-parse --is-inside-work-tree 2>$null
if ($LASTEXITCODE -ne 0) {
    git init
}

# Adiciona o repositório remoto (sobrescreve se já existir)
git remote remove origin 2>$null
$repoUrl = "https://github.com/mvpacheco29/goodlife-chatgpt.git"
git remote add origin $repoUrl

# Adiciona todos os arquivos
git add .

# Faz o commit inicial (ou novo commit se já houver)
$commitMsg = "commit inicial do projeto goodlife-chatgpt"
git commit -m $commitMsg

# Faz o push para o branch main
git branch -M main
git push -u origin main
