export const categories = [
  {
    id: "search",
    label: "General Search",
    icon: "🔍",
    color: "#00d4ff",
    desc: "Main search engines and meta-search tools",
    tools: [
      { name: "Google", url: "https://www.google.com", desc: "Most widely used search engine worldwide" },
      { name: "Bing", url: "https://www.bing.com", desc: "Microsoft's search engine" },
      { name: "DuckDuckGo", url: "https://duckduckgo.com", desc: "Privacy-focused search engine" },
      { name: "Brave Search", url: "https://search.brave.com", desc: "Private, independent and transparent" },
      { name: "Wolfram Alpha", url: "https://www.wolframalpha.com", desc: "Computational knowledge engine" },
      { name: "Yandex", url: "https://yandex.com", desc: "Russian search engine" },
      { name: "Perplexity", url: "https://www.perplexity.ai", desc: "AI-powered search with citations" },
      { name: "YOU.com", url: "https://you.com", desc: "AI search engine" },
      { name: "Startpage", url: "https://www.startpage.com", desc: "World's most private search engine" },
      { name: "Kagi", url: "https://kagi.com", desc: "Ad-free, privacy-first search engine" },
    ]
  },
  {
    id: "dorks",
    label: "Google Dorks",
    icon: "🎯",
    color: "#ff2f7b",
    desc: "Advanced search query generators",
    tools: [
      { name: "DorkGenius", url: "https://dorkgenius.com", desc: "AI-powered Google dork generator" },
      { name: "DorkGPT", url: "https://www.dorkgpt.com", desc: "Generate Google Dorks with AI" },
      { name: "GHDB", url: "https://www.exploit-db.com/google-hacking-database", desc: "Google Hacking Database" },
      { name: "SearchDorks", url: "https://kriztalz.sh/search-dorks/", desc: "Generate dorks for multiple engines" },
    ]
  },
  {
    id: "specialty",
    label: "Specialty Search",
    icon: "🛰️",
    color: "#7b2fff",
    desc: "Specialized search engines for specific data",
    tools: [
      { name: "Shodan", url: "https://www.shodan.io", desc: "Search engine for internet-connected devices" },
      { name: "Censys", url: "https://search.censys.io", desc: "Monitor and analyze internet devices" },
      { name: "FOFA", url: "https://en.fofa.info", desc: "Asset search and analysis platform" },
      { name: "ZoomEye", url: "https://www.zoomeye.ai", desc: "Cyberspace search for IPs and domains" },
      { name: "GreyNoise", url: "https://viz.greynoise.io", desc: "Search exposed internet assets" },
      { name: "Netlas.io", url: "https://app.netlas.io", desc: "Internet assets intelligence" },
      { name: "Criminal IP", url: "https://www.criminalip.io", desc: "Cyber Threat Intelligence search" },
      { name: "ONYPHE", url: "https://search.onyphe.io", desc: "OSINT engine for exposed assets" },
      { name: "FullHunt", url: "https://fullhunt.io", desc: "External attack surface identification" },
      { name: "BGP.tools", url: "https://bgp.tools", desc: "BGP and network intelligence" },
      { name: "Abuseipdb", url: "https://www.abuseipdb.com", desc: "IP abuse reports repository" },
      { name: "Intelligence X", url: "https://intelx.io/tools", desc: "OSINT across dark web and public leaks" },
    ]
  },
  {
    id: "databreach",
    label: "Data Breach",
    icon: "🔓",
    color: "#ff6b2f",
    desc: "Check if data has been exposed in breaches",
    tools: [
      { name: "Have I Been Pwned", url: "https://haveibeenpwned.com", desc: "Check if your email was in a breach" },
      { name: "DeHashed", url: "https://dehashed.com", desc: "Extensive breach data set and notification" },
      { name: "LeakCheck", url: "https://leakcheck.io", desc: "7.5B+ breach entries searchable" },
      { name: "CredenShow", url: "https://credenshow.com", desc: "Identify compromised credentials" },
      { name: "Venacus", url: "https://venacus.com", desc: "Breach search and notifications" },
    ]
  },
  {
    id: "social",
    label: "Social Media",
    icon: "📱",
    color: "#00ffb3",
    desc: "Social network OSINT and analysis tools",
    tools: [
      { name: "Sherlock", url: "https://github.com/sherlock-project/sherlock", desc: "Username search across 300+ platforms" },
      { name: "Maigret", url: "https://github.com/soxoj/maigret", desc: "Dossier from username across 1k+ sites" },
      { name: "Social Searcher", url: "https://www.social-searcher.com", desc: "Real-time social media monitoring" },
      { name: "IDCrawl", url: "https://www.idcrawl.com", desc: "Search name in popular social networks" },
      { name: "WhatsMyName", url: "https://whatsmyname.app", desc: "Username check across many platforms" },
      { name: "Castrick", url: "https://castrickclues.com", desc: "Find accounts by email, username, phone" },
      { name: "Epieos", url: "https://epieos.com", desc: "Find social accounts from email/phone" },
      { name: "Blackbird", url: "https://github.com/p1ngul1n0/blackbird", desc: "Search username across 600+ websites" },
      { name: "Social Analyzer", url: "https://github.com/qeeqbox/social-analyzer", desc: "Find profiles across 1000+ sites" },
    ]
  },
  {
    id: "phone",
    label: "Phone Research",
    icon: "📞",
    color: "#ffcc00",
    desc: "Phone number lookup and intelligence",
    tools: [
      { name: "PhoneInfoga", url: "https://github.com/sundowndev/PhoneInfoga", desc: "Advanced phone number OSINT framework" },
      { name: "Truecaller", url: "https://truecaller.com", desc: "Global reverse phone number search" },
      { name: "Sync.ME", url: "https://sync.me", desc: "Caller ID and spam blocker" },
      { name: "FreeCarrierLookup", url: "https://freecarrierlookup.com", desc: "Carrier name and type lookup" },
      { name: "Spy Dialer", url: "http://spydialer.com", desc: "Voicemail and owner name lookup" },
      { name: "USPhoneBook", url: "https://www.usphonebook.com", desc: "US reverse phone and address lookup" },
    ]
  },
  {
    id: "email",
    label: "Email Search",
    icon: "✉️",
    color: "#ff7eb3",
    desc: "Email investigation and verification tools",
    tools: [
      { name: "Hunter.io", url: "https://hunter.io", desc: "Find email addresses in seconds" },
      { name: "GHunt", url: "https://github.com/mxrch/GHunt", desc: "Investigate Google emails and docs" },
      { name: "Holehe", url: "https://github.com/megadose/holehe", desc: "Check email usage across sites" },
      { name: "EmailRep", url: "https://emailrep.io", desc: "Email reputation and risk scoring" },
      { name: "h8mail", url: "https://github.com/khast3x/h8mail", desc: "Password breach hunting by email" },
      { name: "Epieos Tools", url: "https://tools.epieos.com", desc: "OSINT tools for email investigations" },
      { name: "LeakRadar", url: "https://leakradar.io", desc: "Scan for emails in stealer logs" },
    ]
  },
  {
    id: "domain",
    label: "Domain & IP",
    icon: "🌐",
    color: "#00e5ff",
    desc: "Domain and IP address research tools",
    tools: [
      { name: "Shodan", url: "https://www.shodan.io", desc: "Internet-connected device search" },
      { name: "DNSDumpster", url: "https://dnsdumpster.com", desc: "Discover hosts related to a domain" },
      { name: "SecurityTrails", url: "https://securitytrails.com", desc: "DNS history and WHOIS data" },
      { name: "VirusTotal", url: "https://www.virustotal.com", desc: "Analyze suspicious domains and IPs" },
      { name: "urlscan.io", url: "https://urlscan.io", desc: "Free website scanning and analysis" },
      { name: "Robtex", url: "https://www.robtex.com", desc: "DNS, WHOIS, and AS macro research" },
      { name: "ViewDNS", url: "http://viewdns.info", desc: "DNS lookup and historical data" },
      { name: "WiGLE", url: "https://wigle.net", desc: "Global Wi-Fi network database" },
      { name: "DomainRecon", url: "https://kriztalz.sh/domain-recon/", desc: "DNS, subdomains, SSL and WHOIS" },
      { name: "Web-Check", url: "https://web-check.as93.net", desc: "All-in-one website metadata viewer" },
    ]
  },
  {
    id: "people",
    label: "People Search",
    icon: "👤",
    color: "#c77dff",
    desc: "Find and investigate individuals",
    tools: [
      { name: "Spokeo", url: "https://www.spokeo.com", desc: "People search with premium data" },
      { name: "PeekYou", url: "https://www.peekyou.com", desc: "People search across more sites" },
      { name: "FaceCheck.ID", url: "https://facecheck.id", desc: "Search the internet by face" },
      { name: "PimEyes", url: "https://pimeyes.com", desc: "Online face search engine" },
      { name: "OpenSanctions", url: "https://www.opensanctions.org/search/", desc: "Sanctions and public office holders" },
      { name: "Socialcatfish", url: "https://socialcatfish.com", desc: "200B+ record people search worldwide" },
      { name: "Clustrmaps", url: "https://clustrmaps.com", desc: "Find people and address information" },
      { name: "FamilyTreeNow", url: "https://familytreenow.com", desc: "Genealogy and people research" },
    ]
  },
  {
    id: "image",
    label: "Image Analysis",
    icon: "🖼️",
    color: "#ff4da6",
    desc: "Reverse image search and forensics",
    tools: [
      { name: "TinEye", url: "https://tineye.com", desc: "Reverse image search engine" },
      { name: "Google Lens", url: "https://lens.google.com", desc: "Visual search with AI" },
      { name: "Yandex Images", url: "https://yandex.com/images", desc: "Powerful reverse image search" },
      { name: "GeoSpy", url: "https://geospy.web.app", desc: "AI-based geolocation from images" },
      { name: "FotoForensics", url: "http://www.fotoforensics.com", desc: "JPEG and ELA image forensics" },
      { name: "Forensically", url: "https://29a.ch/photo-forensics/", desc: "Photo forensics in the browser" },
      { name: "Search4faces", url: "https://search4faces.com", desc: "Search people by face photo" },
      { name: "Lenso.ai", url: "https://lenso.ai", desc: "Reverse image with facial recognition" },
      { name: "ImgOps", url: "https://imgops.com", desc: "Image operations and analysis" },
      { name: "ExifTool", url: "http://www.sno.phy.queensu.ca/~phil/exiftool", desc: "Read/write image metadata" },
    ]
  },
  {
    id: "maps",
    label: "Geospatial",
    icon: "🗺️",
    color: "#00ff9d",
    desc: "Geospatial research and mapping tools",
    tools: [
      { name: "Google Maps", url: "https://maps.google.com", desc: "Most popular mapping service" },
      { name: "Wikimapia", url: "http://wikimapia.org", desc: "Collaborative mapping project" },
      { name: "Sentinel Hub", url: "https://www.sentinel-hub.com", desc: "Satellite imagery for EO research" },
      { name: "OpenStreetMap", url: "https://www.openstreetmap.org", desc: "Free, editable world map" },
      { name: "GeoNames", url: "https://www.geonames.org", desc: "Geographical database" },
      { name: "What3Words", url: "https://what3words.com", desc: "3-word address for any location" },
    ]
  },
  {
    id: "threat",
    label: "Threat Intel",
    icon: "☣️",
    color: "#ff3b5c",
    desc: "Cyber threat intelligence platforms",
    tools: [
      { name: "Cisco Talos", url: "https://talosintelligence.com", desc: "IP and domain reputation center" },
      { name: "MalwareBazaar", url: "https://bazaar.abuse.ch/browse/", desc: "Search confirmed malware samples" },
      { name: "URLhaus", url: "https://urlhaus.abuse.ch", desc: "Malicious URL sharing platform" },
      { name: "GreyNoise", url: "https://viz.greynoise.io", desc: "Internet background noise analysis" },
      { name: "Pulsedive", url: "https://pulsedive.com", desc: "Threat intelligence platform" },
      { name: "PhishStats", url: "https://phishstats.info", desc: "Phishing statistics and feed" },
      { name: "Hudson Rock", url: "https://www.hudsonrock.com/threat-intelligence-cybercrime-tools", desc: "Infostealer exposure check" },
      { name: "APTWiki", url: "https://apt.threatradar.net", desc: "Historical APT actor wiki" },
    ]
  },
  {
    id: "darkweb",
    label: "Dark Web",
    icon: "🕵️",
    color: "#888888",
    desc: "Dark web search and monitoring tools",
    tools: [
      { name: "Ahmia", url: "https://ahmia.fi", desc: "Search hidden Tor services" },
      { name: "Intelligence X", url: "https://intelx.io", desc: "Dark web and leak OSINT search" },
      { name: "Dark Web Informer", url: "https://darkwebinformer.com/threat-actor-database/", desc: "Threat actor tracking database" },
    ]
  },
  {
    id: "code",
    label: "Code Search",
    icon: "💻",
    color: "#4dffb4",
    desc: "Search source code and repositories",
    tools: [
      { name: "GitHub Code Search", url: "https://github.com/search?type=code", desc: "Search across GitHub repositories" },
      { name: "grep.app", url: "https://grep.app", desc: "Search all public GitHub repos" },
      { name: "PublicWWW", url: "https://publicwww.com", desc: "Source code search engine" },
      { name: "NerdyData", url: "https://nerdydata.com", desc: "Search engine for source code" },
      { name: "SourceGraph", url: "https://sourcegraph.com/search", desc: "Search millions of open source repos" },
      { name: "SearchCode", url: "https://searchcode.com", desc: "Real-world code examples search" },
    ]
  },
  {
    id: "archive",
    label: "Web Archive",
    icon: "📦",
    color: "#ffa64d",
    desc: "Web history and website capture tools",
    tools: [
      { name: "Wayback Machine", url: "http://archive.org/web/web.php", desc: "Explore website history" },
      { name: "Archive.is", url: "http://archive.is", desc: "Archive and preserve web pages" },
      { name: "CachedView", url: "http://cachedview.com", desc: "View cached pages" },
      { name: "stored.website", url: "https://stored.website", desc: "Stored website snapshots" },
    ]
  },
];

export const stats = {
  tools: 120,
  categories: 14,
  sources: "awesome-osint",
};
