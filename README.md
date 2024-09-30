Clean Architecture

The Clean Architecture consists of three main layers:

- Domain: It contains business logic independent of external technologies.
- Infrastructure: Handles technical details such as databases and external services.
- Presentation: Interacts with the user and delegates requests to the domain layer.

### Entities

Entities are objects that represent fundamental concepts of the application domain. These objects encapsulate the essential state and behavior of key elements within the system.

### Repositories

Repositories are a data access abstraction that act as an interface between the domain layer and the infrastructure layer. Their primary purpose is to encapsulate the logic related to data storage and retrieval, providing an abstraction layer that allows the domain layer to work with entities without worrying about the specific details of how data is stored or retrieved.

### Use cases

Use cases represent the specific actions or functionalities that can be performed by a user or a system within the application. These use cases encapsulate the business logic in a way that is independent of infrastructure and implementation details, making them portable and reusable in different contexts.

### Data sources

Data sources are interfaces or abstractions that represent the data source from which the data needed for the application is obtained. These data sources can be databases, web services, file systems, or any other form of data storage. The use of data sources helps decouple business logic from the specific details of the data source. This means that the domain layer can work with data sources through generic interfaces without knowing the specific implementation details, making it easy to exchange or update the data source without affecting the application logic

### DTOs

DTOs (Data Transfer Objects) are objects that are used to transfer data between different layers of the application, especially between the presentation layer and the domain or infrastructure layer. DTOs encapsulate related data and transport it from one context to another without exposing the underlying business logic. The main function of DTOs is to represent information in a structured and coherent way, facilitating its transport through the application.

### Infrastructure — Repository Implementation

The repository implementation at the infrastructure layer is responsible for providing a concrete implementation of the methods defined in the repository interface at the domain layer. This implementation is responsible for interacting with the actual data source, such as a database, an external service or any other data persistence mechanism.

### Infrastructure — Data source Implementation

The data source implementation in the infrastructure layer is responsible for providing a concrete implementation of the methods defined in the data source interface in the domain layer. This component is responsible for interacting directly with the actual data source, such as a database, a web service or any other data storage medium.

### Presentation— Controller

Controllers are presentation layer components that act as entry points for client requests in an application. These controllers are responsible for receiving HTTP requests, processing them and directing them to the corresponding business logic in the domain layer.

### Presentation — Routes

Routes are presentation layer components that are responsible for defining routes and handling incoming HTTP requests to an application. These routes are used to map HTTP requests to the corresponding controllers and establish the API structure or routing of the application. It is also where our data source and our repository are initialized, the same that is necessary for our controller.
