# DS List 

**DS List** é uma aplicação **full stack web** desenvolvida durante o **Intensivão Java Spring**, evento promovido pela [DevSuperior](https://devsuperior.com.br/).  
O projeto consiste em uma **API RESTful** construída com **Java + Spring Boot** e um **front-end em React**, que consome os dados de jogos armazenados em um banco de dados PostgreSQL.

O objetivo principal é listar jogos organizados por gênero e permitir que os usuários **reordenem os jogos** de cada lista, com a nova ordem sendo persistida diretamente no banco de dados.

## Reordenação no Back-End

A ordenação dos jogos é controlada por esta função:

```java
@Transactional
public void move(Long listId, int sourceIndex, int destinationIndex) {

    List<GameMinProjection> list = gameRepository.searchByList(listId);

    GameMinProjection obj = list.remove(sourceIndex);
    list.add(destinationIndex, obj);

    int min = Math.min(sourceIndex, destinationIndex);
    int max = Math.max(sourceIndex, destinationIndex);

    for (int i = min; i <= max; i++) {
        gameListRepository.updateBelongingPosition(listId, list.get(i).getId(), i);
    }
}
```
# Layout web

![image](https://github.com/user-attachments/assets/b21bccfc-5a2b-4f86-8c35-a65db5e02d00)
![image](https://github.com/user-attachments/assets/9785628d-c2bb-4787-8d46-660be0c0726d)

# Modelo Relacional

![image](https://github.com/user-attachments/assets/9f273006-26c8-451a-b42b-03408014ad7e)

## 🛠️ Tecnologias utilizadas

### Back end
- Java 21
- Spring Boot
- Spring Data JPA / Hibernate
- Maven
- PostgreSQL

### Front end
- HTML / CSS / JavaScript
- ReactJS (com suporte ao React 19)
- dnd-kit (drag and drop)
- Axios
- React Router DOM

# Autor
Malcon Rezende Rodrigues

https://www.linkedin.com/in/malcon-rezende/

