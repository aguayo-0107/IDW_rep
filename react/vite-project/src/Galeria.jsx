const Perfil = () => {
    return(
        <div>
            <img 
            src ={"https://imgs.search.brave.com/uU-iPI9G0mMPvtQSenIE7NiOBkoNlHD6tvhpSOPbim8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbXVuZG9p/dGFtLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMC9G/YXJhaF9FbmxhbWly/YS5qcGVnP3Jlc2l6/ZT01MzIsNDUyJnNz/bD0x"}
            alt="Farah, gato del itam" />
        </div>
    );
};

export default function Galeria() {
    return(
        <div>
            <h1>Galeria ITAM</h1>
            <Perfil />
            <Perfil />
            <Perfil />
        </div>
    );
};