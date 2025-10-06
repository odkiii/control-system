```mermaid
erDiagram
    User {
        int id PK
        string username
        string email
        string role
    }

    Project {
        int id PK
        string name
        int manager_id FK
    }

    ProjectStage {
        int id PK
        string name
        int project_id FK
    }

    ProjectMember {
        int id PK
        int project_id FK
        int user_id FK
        string role
    }

    Defect {
        int id PK
        string title
        int project_id FK
        int stage_id FK
        string status
        int author_id FK

    }

    DefectComment {
        int id PK
        string content
        int defect_id FK
        int author_id FK
    }

    DefectFile {
        int id PK
        string filename
        string file_type
        int defect_id FK
    }

    %% связи
    User ||--o{ Project : "manages"
    User ||--o{ ProjectMember : "participates"
    Project ||--o{ ProjectMember : "has members"
    Project ||--o{ ProjectStage : "has stages"
    Project ||--o{ Defect : "has defects"
    ProjectStage ||--o{ Defect : "contains"
    User ||--o{ Defect : "reports/assigned"
    Defect ||--o{ DefectComment : "has comments"
    Defect ||--o{ DefectFile : "has files"
