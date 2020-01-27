class director extends angajat {
    constructor(directorProperties) {
        super(directorProperties);
        this.director = true;
        this.salariu = directorProperties.salariu;

    }

    hasLeadership() {
        
    }
}