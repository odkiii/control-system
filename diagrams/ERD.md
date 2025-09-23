```mermaid
erDiagram
    User {
        int id PK
        string username
        string email
        string password_hash
        string first_name
        string last_name
        string role
        boolean is_active
        datetime created_at
        datetime updated_at
    }

    Project {
        int id PK
        string name
        string description
        string address
        string customer
        datetime start_date
        datetime end_date
        int manager_id FK
    }

    ProjectStage {
        int id PK
        string name
        string description
        datetime start_date
        datetime end_date
        int project_id FK
        int responsible_id
    }

    ProjectMember {
        int id PK
        int project_id FK
        int user_id FK
        string role
        datetime joined_at
    }

    Defect {
        int id PK
        string title
        string description
        int project_id FK
        int stage_id FK
        string category
        string priority
        string status
        string location
        int author_id FK
        int assignee_id
        datetime due_date
        datetime created_at
        datetime updated_at
    }

    DefectComment {
        int id PK
        string content
        int defect_id FK
        int author_id FK
        datetime created_at
    }

    DefectFile {
        int id PK
        string file
        string filename
        string file_type
        int file_size
        int defect_id FK
        datetime uploaded_at
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
