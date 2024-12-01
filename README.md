# Design Patterns: Singleton e Abstract Factory  

## O que é o Singleton?  
O padrão **Singleton** é um padrão de design criacional que garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela. Ele é amplamente utilizado em situações onde é necessário controlar o acesso a um recurso único, como um banco de dados ou um gerenciador de configuração.

### Pontos Fortes do Singleton  
- **Controle de Instância Única:** Garante que apenas uma instância da classe exista durante todo o ciclo de vida da aplicação.  
- **Acesso Global:** Permite acessar a instância facilmente a partir de qualquer parte do código.  
- **Economia de Recursos:** Evita a criação de múltiplas instâncias de classes que consomem muitos recursos.  

### Desvantagens de Não Usar Singleton  
- **Redundância de Instâncias:** Múltiplas instâncias podem ser criadas inadvertidamente, desperdiçando recursos.  
- **Inconsistência de Estado:** Caso várias instâncias sejam criadas, podem surgir inconsistências devido à falta de uma fonte de verdade única.  

---

## O que é o Abstract Factory?  
O padrão **Abstract Factory** é um padrão de design criacional que fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. Ele é ideal para sistemas que precisam ser independentes de como seus objetos são criados, compostos e representados.  

### Pontos Fortes do Abstract Factory  
- **Desacoplamento:** Promove a separação entre a lógica de criação e o código cliente, aumentando a flexibilidade.  
- **Coerência de Objetos:** Garante que objetos relacionados sejam compatíveis entre si.  
- **Facilidade de Manutenção:** Facilita a adição de novos tipos de objetos sem alterar o código existente.  

### Desvantagens de Não Usar Abstract Factory  
- **Acoplamento Forte:** O código cliente pode ficar fortemente acoplado às classes concretas, dificultando mudanças futuras.  
- **Falta de Escalabilidade:** A introdução de novos produtos pode requerer alterações significativas no código existente.  
- **Risco de Inconsistência:** Pode ocorrer inconsistência ao criar objetos relacionados manualmente sem garantir compatibilidade.  

---

Utilizar os padrões **Singleton** e **Abstract Factory** de maneira apropriada pode simplificar a arquitetura do software, promover boas práticas de design e garantir maior escalabilidade e manutenção do sistema.
