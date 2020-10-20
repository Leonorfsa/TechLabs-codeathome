var countries_data = {
    "Belgium" : {
        "url" : "www.google.com",
        "case_number" : "20",
        "comments" : "wear masks",
        "Entry": "None",
        "Hygiene": "None",
        "Activity": "None",
        "Links": "None",
        "Dates": "None"
    },
    "Germany Berlin" : {
        "url" : "www.google.com",
        "case_number" : "10",
        "comments" : "wear masks",
        "Entry": "Yes",
        "Hygiene": "Masks are necessary during shopping and travelling per public transports.",
        "Activity": "Many activities are allowed with sometimes limited access.",
        "Links": "Yes",
        "Dates": "Yes"
    },
    "Portugal" : {
        "url" : "www.google.com",
        "case_number" : "20",
        "comments" : "wear masks",
        "Entry": "None",
        "Hygiene": "None",
        "Activity": "None",
        "Links": "None",
        "Dates": "None"
    },
    "Sweden" : {
        "url" : "ww.fitta.se",
        "case_number" : "20",
        "comments" : "don't wear masks",
        "Entry": "None",
        "Hygiene": "None",
        "Activity": "None",
        "Links": "None",
        "Dates": "None"
    }    
};

var country_connections = {
    "Belgium - Germany Berlin"  : "wash your hands and wear mask",
    "Belgium - Portugal"        : "wash your hands and wear mask",
    "Belgium - Sweden"          : "wash your hands and don't wear mask",
    "Germany Berlin - Belgium"  : "wash your hands and wear mask",
    "Germany Berlin - Portugal" : "wash your hands and wear mask",
    "Germany Berlin - Sweden"   : "wash your hands and don't wear mask",
    "Portugal - Belgium"        : "wash your hands and wear mask",
    "Portugal - Germany Berlin" : "wash your hands and wear mask",
    "Portugal - Sweden"         : "wash your hands and don't wear mask",
    "Sweden - Belgium"          : "wash your hands and wear mask",
    "Sweden - Germany Berlin"   : "wash your hands and wear mask",
    "Sweden - Portugal"         : "wash your hands and wear mask",
};