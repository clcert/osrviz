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
        slug: "correo",
        title: "Correo Electrónico",
        icon: "email"
    },
    {
        slug: "dns",
        title: "DNS",
        icon: "dns"
    },
    {
        slug: "web",
        title: "Páginas Web",
        icon: "web"
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
    "vulnerabilidadesPortipo": {
        "titulo": "Malware detectado por tipo",
        "descripcion": "Número de reportes de malware en máquinas chilenas, por tipo",  
        "archivos": ["reportes_vulnerabilidades"],
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
            "src": "Fuente",
            "report_type":"Tipo de vulnerabilidad"
        },
    },
    "vulnerabilidadesTotal": {
        "titulo": "Malware detectado total",
        "descripcion": "Número de reportes de malware en máquinas chilenas" ,
        "columnas": {
            "date": "Semana",
            "reports_number": "N° IPs detectadas",
            "src": "Fuente",
            "report_type":"Tipo de vulnerabilidad"
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
    }
}