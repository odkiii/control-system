```mermaid
usecaseDiagram
    actor Engineer
    actor Manager
    actor Customer

    Engineer --> (Register defect)
    Engineer --> (Attach photos/files)
    Manager --> (Assign responsible & deadline)
    Manager --> (Track defect status)
    Customer --> (View reports)
    Manager --> (Generate analytics)
