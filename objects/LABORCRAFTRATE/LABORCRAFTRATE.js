mos = {
    "objectName": "LABORCRAFTRATE",
    "className": "psdi.app.labor.LaborCraftRateSet",
    "description": "Labor Craft Rates",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LABORCRAFTRATEID",
    "primaryKeyColumns": [
        "ORGID",
        "LABORCODE",
        "CRAFT",
        "SKILLLEVEL",
        "VENDOR",
        "CONTRACTNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Labor Craft Rate",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Identifier of this labor code's default craft. A list of all crafts associated with this labor code is displayed in the Crafts tab.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "The skill level of the craft for this labor code.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifier of the labor's craft. Entering a craft code in this field associates the labor record with that craft.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "The contract number of the specified craft.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "INHERIT",
            "required": true,
            "persistent": true,
            "title": "Inherit Rate from Craft",
            "remarks": "Indicates that the standard rate established for this craft, skill level, vendor and contract is being used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTCRAFT",
            "required": true,
            "persistent": true,
            "title": "Default Craft for Labor",
            "remarks": "Indicates that this is the default craft for this labor code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RATE",
            "required": false,
            "persistent": true,
            "title": "Rate",
            "remarks": "Rate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "Control Account",
            "remarks": "ControlAccount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISACTIVE",
            "required": true,
            "persistent": false,
            "title": "Active Contract",
            "remarks": "Indicates that either no contract exists for this specified craft or if a contract does exist, the contract is approved and within the validity period. ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYRATE",
            "required": false,
            "persistent": false,
            "title": "Rate",
            "remarks": "The rate established exclusively for the specified labor code. Having specified a rate in the Rate field, if you select the Inherit check box, the value in the Rate field will revert to the standard rate and the Rate field becomes read-only. To set a rate exclusively for this labor code, enter a rate in the Rate field and do not select the Inherit check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORCRAFTRATEID",
            "required": true,
            "persistent": true,
            "title": "LABORCRAFTRATEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTTICKETGLACC",
            "required": false,
            "persistent": true,
            "title": "Default Ticket GL Account",
            "remarks": "Default Ticket GL Account for a LaborCraftRate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STANDARDRATE",
            "required": false,
            "persistent": false,
            "title": "Standard Rate",
            "remarks": "The standard rate established for the specified craft and skill level. ",
            "sameAsAttribute": "STANDARDRATE",
            "sameAsObject": "CRAFTRATE"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifier of this labor code's default vendor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "DISPLAYTO",
            "required": false,
            "persistent": false,
            "title": "Display To",
            "remarks": "Displays the current date plus seven days date. Available Work Hours table window displays the seven days of the week. You can modify this date to select a new ending date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Relationship to the ASSIGNMENT table.  (assignment.laborcode = laborcraftrate.laborcode.)  The resulting set will contain one or more objects.",
            "whereClause": "laborcode=:laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSIGNMENTNOTHISTORY",
            "target": "ASSIGNMENT",
            "remarks": "Relationship to the assignment table where laborcode=laborcode, orgid=:orgid and the workorder is a non-history workorder.",
            "whereClause": "laborcode=:laborcode and ((craft=:craft and :craft is not null) or (:craft is null and craft is null)) and ((skilllevel=:skilllevel and :skilllevel is not null) or (:skilllevel is null and skilllevel is null)) and ((vendor=:vendor and :vendor is not null) or (:vendor is null and vendor is null)) and ((contractnum=:contractnum and :contractnum is not null) or (:contractnum is null and contractnum is null)) and wonum in (select wonum from workorder where historyflag=:no and orgid=:orgid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table where company and orgid match. (companies.company=laborcraftrate.vendor and companies.orgid=laborcraftrates.orgid.)  This will return 0 or more objects.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFT",
            "target": "CRAFT",
            "remarks": "Relationship to the Craft table on LaborCraftRate. (craft.craft = :laborcraftrate.craft  and craft.orgid=laborcraftrate.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTRATE",
            "target": "CRAFTRATE",
            "remarks": "Relationship from laborcraftrate to craftrate.  Where craft, skill, vendor, contract and org match or are null.  Returns 0 or 1 object.",
            "whereClause": "craft=:craft and ((skilllevel=:skilllevel and :skilllevel is not null) or (skilllevel is null and :skilllevel is null)) and ((vendor=:vendor and :vendor is not null) or (vendor is null and :vendor is null)) and ((contractnum=:contractnum and :contractnum is not null and revisionnum=(select revisionnum from contract where contractnum=:contractnum and orgid=:orgid and status in (select value from synonymdomain where domainid='CONTRACTSTATUS' and maxvalue='APPR'))) or (contractnum is null and :contractnum is null)) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship to the craftskill table to find the description.",
            "whereClause": "craft=:craft and orgid=:orgid and (skilllevel=:skilllevel or ((:skilllevel is null or :skilllevel='') and skilllevel is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table on laborcode. (labor.laborcode=laborcraftrate.laborcode and labor.orgid=laborcraftrate.orgid.)  This will return 0 or more objects ",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MODAVAIL",
            "target": "MODAVAIL",
            "remarks": "Relationship from LaborCraftRate to ModAvail",
            "whereClause": "personid = (select personid from labor where laborcode = :laborcode and orgid = :orgid)",
            "cardinality": null
        },
        {
            "name": "PERSONAVAIL",
            "target": "PERSONAVAIL",
            "remarks": "Relationship to the non-persistent PersonAvail table.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PPCRAFTRATE",
            "target": "PPCRAFTRATE",
            "remarks": "Relationship to the PPCraftRate table where craft and orgid match. (laborcraftrate.craft=ppcraftrate.craft and laborcraftrate.orgid = ppcraftrate.orgid.)  This will return 0 or more objects.",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PPLABORRATE",
            "target": "PPLABORRATE",
            "remarks": "Relationship to the wplabor table where laborcode=laborcode, craft=:craft and orgid=:orgid.",
            "whereClause": "laborcode=:laborcode and craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKPERIOD",
            "target": "WORKPERIOD",
            "remarks": "Relationship from LaborCraftRate to WorkPeriod",
            "whereClause": "orgid = (select orgid from personcal where personid = (select personid from labor where laborcode = :laborcode and orgid = :orgid) and isprimary = 1) and calnum = (select calnum from personcal where personid = (select personid from labor where laborcode = :laborcode and orgid = :orgid) and isprimary = 1) and shiftnum = (select shiftnum from personcal where personid = (select personid from labor where laborcode = :laborcode and orgid = :orgid) and isprimary = 1)",
            "cardinality": null
        },
        {
            "name": "WPLABORNOTHISTORY",
            "target": "WPLABOR",
            "remarks": "Relationship to the wplabor table where laborcode=laborcode, orgid=:orgid and the workorder is a non-history workorder.",
            "whereClause": "laborcode=:laborcode and wonum in (select wonum from workorder where historyflag=:no and orgid=:orgid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABORCRAFTRATE",
            "source": "CRAFT",
            "remarks": "Relationship to the LaborCraftRate table on craft. (laborcraftrate.craft = craft.craft and laborcraftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORCRAFTRATE",
            "source": "LABOR",
            "remarks": "Relationship to the Laborcraft table where laborcode and orgid match. (laborcraftrate.laborcode=labor.laborcode and laborcraftrate.orgid = labor.orgid.)  This will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LABORCRAFTRATEDEFAULT",
            "source": "LABOR",
            "remarks": "Relationship to the Laborcraft table where laborcode and orgid match and defaultcraft is Y. (laborcraftrate.laborcode=labor.laborcode and laborcraftrate.orgid = labor.orgid and laborcraftrate.defaultcraft=Y.)  This will return 1 object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid and defaultcraft=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORCRAFTRATE",
            "source": "LABORVIEW",
            "remarks": "Relationship to the laborcraftrate table, used to find all craft rates for a given contract. (laborview.contractnum=laborcraftrate.contractnum and laborview.orgid=laborcraftrate.orgid)",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}