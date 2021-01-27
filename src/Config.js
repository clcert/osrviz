export var Config = {
    API_ROUTE: "/data/",
    START_DATE: "2016-01-01",
    COLORES: {
        "dns": "#0eb29f",
        "mail": "#f72e5d",
        "web": "#0b6bc4",
    },
    NOMBRES: {
        "dns": "DNS",
        "mail": "E-mail",
        "web": "Web",
    },
    TABS: {
        "rrs": "RRs",
        "ips": "IPs",
        "asns": "ASNs",
        "paises": "Países"
    },
    BARLIMIT: 5
}

export const Paginas = [
    {
        slug: "dominios",
        title: "Dominios .CL",
        icon: "flag-outline"
    },
    {
        slug: "malware",
        title: "Malware",
        icon: "bug"
    }
]

export const Graficos = {
    "dominiosRegistrados": {
        "titulo": "Dominios Registrados",
        "descripcion": "Número de dominios nuevos por semana a lo largo del tiempo",  
        "nombreArchivos": ["Dominios Nuevos"],
        "archivos": ["dominios_nuevos_semana"],
        "columnas": {
            "date": "Semana",
            "c": "N° Dominios"
        },
    },
    "dominiosEliminados": {
        "titulo": "Dominios Eliminados",
        "descripcion": "Número de dominios eliminados por semana a lo largo del tiempo" , 
        "nombreArchivos": ["Dominios Eliminados"],
        "archivos": ["dominios_eliminados_semana"],
        "columnas": {
            "date": "Semana",
            "c": "N° Dominios"
        },
    },
    "vulnerabilidadesFuerzaBruta": {
        "titulo": "Malware tipo Fuerza Bruta",
        "descripcion": "Número de reportes de malware de tipo Fuerza Bruta en máquinas con IPs chilenas" ,
        "nombreArchivos": [
            "Fuerza Bruta", 
        ],
        "archivos": [
            "reportes_vulnerabilidades_bruteforce", 
        ],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
        },
    },
    "vulnerabilidadesCommandControl": {
        "titulo": "Malware tipo Command and Control",
        "descripcion": "Número de reportes de malware de tipo Command and Control en máquinas con IPs chilenas" ,
        "nombreArchivos": [
            "Command and Control",
        ],
        "archivos": [
            "reportes_vulnerabilidades_c2",
        ],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
        },
    },
    "vulnerabilidadesDarknets": {
        "titulo": "Máquinas tipo Darknet",
        "descripcion": "Número de reportes de máquinas de tipo Darknet con IPs chilenas" ,
        "nombreArchivos": [
            "Darknets",
        ],
        "archivos": [
            "reportes_vulnerabilidades_darknet",
        ],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
        },
    },
    "vulnerabilidadesHoneypots": {
        "titulo": "Máquinas tipo Honeypot",
        "descripcion": "Número de reportes de máquinas de tipo Honeypot con IPs chilenas" ,
        "nombreArchivos": [
            "Honeypots",
        ],
        "archivos": [
            "reportes_vulnerabilidades_honeypot",
        ],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
        },
    },
    "vulnerabilidadesResolvers": {
        "titulo": "Resolvers Abiertos",
        "descripcion": "Número de reportes de máquinas con resolvers abiertos e IPs chilenas" ,
        "nombreArchivos": [
            "Resolvers DNS Abiertos",
        ],
        "archivos": [
            "reportes_vulnerabilidades_openresolver",
        ],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
        },
    },
    "vulnerabilidadesPhishing": {
        "titulo": "Máquinas relacionadas con Phishing",
        "descripcion": "Número de reportes de máquinas relacionadas con phishing con IPs chilenas" ,
        "nombreArchivos": [
            "Phishing",
        ],
        "archivos": [
            "reportes_vulnerabilidades_phishing",
        ],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
        },
    },
    "vulnerabilidadesProxy": {
        "titulo": "Proxies Abiertos",
        "descripcion": "Número de reportes de máquinas con proxies abiertos e IPs chilenas" ,
        "nombreArchivos": [
            "Proxy Abierto",
        ],
        "archivos": [
            "reportes_vulnerabilidades_proxy",
        ],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
        },
    },
    "vulnerabilidadesSpam": {
        "titulo": "Máquinas relacionadas con SPAM",
        "descripcion": "Número de reportes de máquinas con reportes de SPAM e IPs chilenas" ,
        "nombreArchivos": [
            "SPAM"
        ],
        "archivos": [
            "reportes_vulnerabilidades_spam"
        ],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
        },
    },

    "dnsRankingPais": {
        "titulo": "Servidores por país",
        "descripcion": "Número de dominios chilenos con servidores en cada país",
        "archivos": ["dominios_web_ranking_pais_semana", "dominios_mail_ranking_pais_semana", "dominios_dns_ranking_pais_semana"],
        "columnas": {
            "ranking": "Ranking",
            "country_name":"País",
            "num_ips": "N° IPs",
        },
    },
    "dnsRankingASN": {
        "titulo": "Servidores por Sistema Autónomo",
        "descripcion": "Número de dominios chilenos con servidores en cada sist. autónomo",
        "archivos": ["dominios_web_ranking_asn_semana", "dominios_mail_ranking_asn_semana", "dominios_dns_ranking_asn_semana"],
        "columnas": {
            "ranking": "Ranking",
            "asn_name":"ASN",
            "num_ips": "N° IPs",
        },
    },
    "resilienciaDominios": {
        "titulo": "Resiliencia de dominios",
        "descripcion": "Cantidad de dominios que tienen distintas cantidades de recursos (RRs, IPs, ASNs, Países)",
        "archivos": [
            "numero_rrs_dominios_web",
            "numero_rrs_dominios_dns",
            "numero_rrs_dominios_mail",
            "numero_ips_dominios_web",
            "numero_ips_dominios_dns",
            "numero_ips_dominios_mail",
            "numero_asns_dominios_web",
            "numero_asns_dominios_dns",
            "numero_asns_dominios_mail",
            "numero_paises_dominios_web",
            "numero_paises_dominios_dns",
            "numero_paises_dominios_mail",
        ],
        "columnas": {
            "num": "# Dominios",
            "count":"# Recursos",
        },
    },
    "rankingServiciosConocidosWeb": {
        "titulo": "Ranking Servicios Conocidos Web",
        "descripcion": "Tipo y versiones de software web más reconocidas en escaneos de IPs chilenas",
        "archivos": ["nombres_servicios_identificados"],
        "columnas": {
            "ranking": "Ranking",
            "asn_name":"ASN",
            "num_ips": "N° IPs",
        },
    },

}