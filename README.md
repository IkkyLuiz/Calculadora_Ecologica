# 🌍 EcoCalc - Calculadora de Emissões de CO₂

Uma calculadora web interativa para estimar emissões de CO₂ em diferentes meios de transporte e calcular a compensação ambiental necessária.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

O EcoCalc é uma ferramenta educacional que permite calcular e comparar as emissões de CO₂ de diferentes meios de transporte em rotas brasileiras. O projeto ajuda a conscientizar sobre o impacto ambiental das escolhas de transporte no dia a dia.

### ✨ Funcionalidades

- 🗺️ **Rotas Pré-definidas**: Seleção rápida de rotas entre principais cidades brasileiras
- 🛣️ **Distância Personalizada**: Cálculo para qualquer distância desejada
- 🚗 **Comparação de Transportes**: Análise entre carro, ônibus, caminhão e bicicleta
- 📊 **Visualização Intuitiva**: Barras de progresso coloridas para fácil comparação
- 🌱 **Cálculo de Compensação**: Estimativa de créditos de carbono e custo para compensação
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop e mobile

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação adicional necessária!

### Instalação

1. Clone este repositório:
```bash
git clone https://github.com/IkkyLuiz/Calculadora_Ecologica
```

2. Navegue até a pasta do projeto:
```bash
cd ecocalc
```

3. Abra o arquivo `index.html` no seu navegador

**Ou simplesmente:**
- Baixe os arquivos
- Abra o `index.html` diretamente no navegador

## 📁 Estrutura do Projeto

```
ecocalc/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e design
├── js/
│   └── calculator.js   # Lógica de cálculos
└── README.md          # Documentação
```

## 🎯 Como Funciona

### Fatores de Emissão

O projeto utiliza fatores médios de emissão de CO₂ por quilômetro:

| Transporte | Emissão (kg CO₂/km) |
|-----------|---------------------|
| 🚲 Bicicleta | 0.000 |
| 🚌 Ônibus | 0.089 |
| 🚗 Carro | 0.120 |
| 🚚 Caminhão | 0.960 |

### Cálculo de Créditos

- 1 crédito de carbono = 1 tonelada de CO₂
- Custo estimado: R$ 100,00 por crédito
- Referência baseada nas emissões do carro

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização moderna com CSS Grid e Flexbox
- **JavaScript (Vanilla)**: Lógica de cálculos e interatividade
- **Google Fonts**: Tipografia Inter

### Recursos CSS

- CSS Variables para temas consistentes
- Animações suaves com keyframes
- Design responsivo com Grid Layout
- Gradientes modernos

## 🌐 Rotas Disponíveis

### Sudeste
- São Paulo ↔ Rio de Janeiro (430 km)
- São Paulo ↔ Belo Horizonte (580 km)
- Rio de Janeiro ↔ Belo Horizonte (440 km)

### Sul
- Curitiba ↔ Florianópolis (310 km)
- Curitiba ↔ Porto Alegre (710 km)

### Outras Regiões
- Brasília ↔ Goiânia (210 km)
- Salvador ↔ Recife (810 km)

## 🔧 Personalização

### Adicionar Novas Rotas

Edite o arquivo `index.html` e adicione novas opções no select:

```html
<option value="DISTANCIA_EM_KM">Cidade A ↔ Cidade B (XXX km)</option>
```

### Modificar Fatores de Emissão

Edite o arquivo `js/calculator.js` e altere o objeto `FACTORS`:

```javascript
const FACTORS = { 
    bicicleta: 0, 
    onibus: 0.089, 
    carro: 0.12, 
    caminhao: 0.96 
};
```

### Alterar Cores do Tema

Edite as CSS variables no arquivo `style.css`:

```css
:root {
    --primary-color: #10b981;
    --primary-dark: #059669;
    /* ... outras variáveis */
}
```

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS e Android)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📝 Melhorias Futuras

- [ ] Adicionar mais meios de transporte (avião, trem, metrô)
- [ ] Integração com API de rotas para cálculo automático de distâncias
- [ ] Histórico de cálculos realizados
- [ ] Gráficos comparativos mais detalhados
- [ ] Modo escuro (dark mode)
- [ ] Exportação de relatórios em PDF
- [ ] Internacionalização (i18n)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Desenvolvido com 💚 por Luiz Café

## 🙏 Agradecimentos

- Dados de emissão baseados em médias do setor de transportes
- Ícones de emoji nativos do sistema
- Fonte Inter do Google Fonts

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

🌍 Vamos juntos por um planeta mais sustentável!
