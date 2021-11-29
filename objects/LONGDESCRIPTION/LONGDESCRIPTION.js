mos = {
    "objectName": "LONGDESCRIPTION",
    "className": "psdi.app.system.LongDescSet",
    "description": "The LONGDESCRIPTION Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LONGDESCRIPTIONID",
    "primaryKeyColumns": [
        "LDKEY",
        "LDOWNERTABLE",
        "LANGCODE",
        "LDOWNERCOL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "LONGDESCRIPTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LONGDESCRIPTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LDOWNERCOL",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LONGDESCRIPTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LDOWNERTABLE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object that owns the long description",
            "longDescription": "The LDKey is the unique ID of the specific record that owns the long description"
        }
    ],
    "columns": [
        {
            "attributeName": "LDKEY",
            "required": true,
            "persistent": true,
            "title": "Ldkey",
            "remarks": "Long Description Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LDOWNERTABLE",
            "required": true,
            "persistent": true,
            "title": "Ldownertable",
            "remarks": "Long Description Owner Table",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LDOWNERCOL",
            "required": true,
            "persistent": true,
            "title": "Ldownercol",
            "remarks": "Long Description Owner Column",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LDTEXT",
            "required": false,
            "persistent": true,
            "title": "Ldtext",
            "remarks": "Long Description Text",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language",
            "remarks": "LANGCODE",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "LONGDESCRIPTIONID",
            "required": true,
            "persistent": true,
            "title": "LONGDESCRIPTIONID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "Internal content unique ID",
            "remarks": "System internal content uniqueid to identify a long description record. It shouldn't be shown to the final user and it cannot be modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LONGDESC",
            "source": "ACTION",
            "remarks": "Relationship to get long description table from ACTION.",
            "whereClause": "ldkey=:actionid and ldownertable = 'ACTION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "ADDRESS",
            "remarks": "Relationship to get long description table from ADDRESS.",
            "whereClause": "ldkey=:addressid and ldownertable = 'ADDRESS'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "ASSET",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for asset. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:assetuid and ldownertable = 'ASSET'",
            "cardinality": null
        },
        {
            "name": "LONGDESC",
            "source": "CALENDAR",
            "remarks": "Relationship to get long description table from CALENDAR.",
            "whereClause": "ldkey=:calendarid and ldownertable = 'CALENDAR'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to get long description table from CLASSSTRUCTURE.",
            "whereClause": "ldkey=:classstructureuid and ldownertable = 'CLASSSTRUCTURE'",
            "cardinality": "SINGLE"
        },
        {
            "name": "LONGDESC",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to get long description table from COMMTEMPLATE.",
            "whereClause": "ldkey=:commtemplateid and ldownertable = 'COMMTEMPLATE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "COMPANIES",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for company. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:companiesid and ldownertable = 'COMPANIES'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCRONTASKDEFLONGDESC",
            "source": "CRONTASKDEF",
            "remarks": "long description record for crontaskdef",
            "whereClause": "ldkey=:crontaskdefid and ldownertable = 'CRONTASKDEF'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCRONTASKINSTANCELONGDESC",
            "source": "CRONTASKINSTANCE",
            "remarks": "long description record for crontaskinstance",
            "whereClause": "ldkey=:crontaskinstanceid and ldownertable = 'CRONTASKINSTANCE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCURRENCYLONGDESC",
            "source": "CURRENCY",
            "remarks": "long description record for Currency",
            "whereClause": "ldkey=:currencyid and ldownertable = 'CURRENCY'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPKGDEFLONGDESC",
            "source": "DMPACKAGEDEF",
            "remarks": "long description record for dmpackagedef",
            "whereClause": "ldkey=:dmpackagedefid and ldownertable = 'DMPACKAGEDEF'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMDOCINFOLONGDESC",
            "source": "DOCINFO",
            "remarks": "long description record for docinfo",
            "whereClause": "ldkey=:docinfoid and ldownertable = 'DOCINFO'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "DPAMSWSUITE",
            "remarks": "Relationship to get long description table from DPAMSWSUITE.",
            "whereClause": "ldkey=:suiteid and ldownertable = 'DPAMSWSUITE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "DPAMSWUSAGE",
            "remarks": "Relationship to get long description table from DPAMSWUSAGE.",
            "whereClause": "ldkey=:inputsourceid and ldownertable = 'DPAMSWUSAGE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "ESCALATION",
            "remarks": "Relationship to get long description table from ESCALATION.",
            "whereClause": "ldkey=:escalationid and ldownertable = 'ESCALATION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "ITEM",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for item. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:itemid and ldownertable = 'ITEM'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "JOBPLAN",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for jobplan. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:jobplanid and ldownertable = 'JOBPLAN'",
            "cardinality": null
        },
        {
            "name": "LONGDESC",
            "source": "KPIMAIN",
            "remarks": "Relationship to get long description table from KPIMAIN.",
            "whereClause": "ldkey=:kpimainid and ldownertable = 'KPIMAIN'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "LOCATIONS",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for locations. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:locationsid and ldownertable = 'LOCATIONS'",
            "cardinality": null
        },
        {
            "name": "DMMAXENDPTLONGDESC",
            "source": "MAXENDPOINT",
            "remarks": "long description record for maxendpoint",
            "whereClause": "ldkey=:maxendpointid and ldownertable = 'MAXENDPOINT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXEXTSYSLONGDESC",
            "source": "MAXEXTSYSTEM",
            "remarks": "long description record for maxextsystem",
            "whereClause": "ldkey=:maxextsystemid and ldownertable = 'MAXEXTSYSTEM'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "MAXGROUP",
            "remarks": "Relationship to get long description table from MAXGROUP.",
            "whereClause": "ldkey=:maxgroupid and ldownertable = 'MAXGROUP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXIFACECNTLLONGDESC",
            "source": "MAXIFACECONTROL",
            "remarks": "long description record for maxifacecontrol",
            "whereClause": "ldkey=:maxifacecontrolid and ldownertable = 'MAXIFACECONTROL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXIFACEINLONGDESC",
            "source": "MAXIFACEIN",
            "remarks": "long description record for maxifacein",
            "whereClause": "ldkey=:maxifaceinid and ldownertable = 'MAXIFACEIN'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXIFINVOKELD",
            "source": "MAXIFACEINVOKE",
            "remarks": "long description record for maxifaceinvoke",
            "whereClause": "ldkey=:maxifaceinvokeid and ldownertable = 'MAXIFACEINVOKE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXIFACEOUTLONGDESC",
            "source": "MAXIFACEOUT",
            "remarks": "long description record for maxifaceout",
            "whereClause": "ldkey=:maxifaceoutid and ldownertable = 'MAXIFACEOUT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXIFPROCLONGDESC",
            "source": "MAXIFACEPROC",
            "remarks": "long description record for maxifaceproc",
            "whereClause": "ldkey=:maxifaceprocid and ldownertable = 'MAXIFACEPROC'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXINTOBJLONGDESC",
            "source": "MAXINTOBJECT",
            "remarks": "long description record for maxintobject",
            "whereClause": "ldkey=:maxintobjectid and ldownertable = 'MAXINTOBJECT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXLNENTRYLONGDESC",
            "source": "MAXLAUNCHENTRY",
            "remarks": "long description record for MAXLAUNCHENTRY",
            "whereClause": "ldkey=:maxlaunchentryid and ldownertable = 'MAXLAUNCHENTRY'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "MAXROLE",
            "remarks": "Relationship to get long description table from MAXROLE.",
            "whereClause": "ldkey=:maxroleid and ldownertable = 'MAXROLE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "ORGANIZATION",
            "remarks": "Relationship to get long description table from ORGANIZATION.",
            "whereClause": "ldkey=:organizationid and ldownertable = 'ORGANIZATION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPERSONLONGDESC",
            "source": "PERSON",
            "remarks": "long description record for person",
            "whereClause": "ldkey=:personuid and ldownertable = 'PERSON'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMPERSONGRPLONGDESC",
            "source": "PERSONGROUP",
            "remarks": "long description record for person group",
            "whereClause": "ldkey=:persongroupid and ldownertable = 'PERSONGROUP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "PM",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for pmuid. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:pmuid and ldownertable = 'PM'",
            "cardinality": null
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "PO",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for po. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:poid and ldownertable = 'PO'",
            "cardinality": null
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "PR",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for pr. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:prid and ldownertable = 'PR'",
            "cardinality": null
        },
        {
            "name": "LONGDESC",
            "source": "RECONCOMPRULE",
            "remarks": "Relationship to get long description table from RECONCOMPRULE.",
            "whereClause": "ldkey=:reconruleid and ldownertable = 'RECONCOMPRULE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "RECONLINKRULE",
            "remarks": "Relationship to get long description table from RECONLINKRULE.",
            "whereClause": "ldkey=:reconruleid and ldownertable = 'RECONLINKRULE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "RECONTASK",
            "remarks": "Relationship to get long description table from RECONTASK.",
            "whereClause": "ldkey=:recontaskid and ldownertable = 'RECONTASK'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "RECONTASKFILTER",
            "remarks": "Relationship to get long description table from RECONTASKFILTER.",
            "whereClause": "ldkey=:recontaskfilterid and ldownertable = 'RECONTASKFILTER'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "ROUTES",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for routes. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:routesid and ldownertable = 'ROUTES'",
            "cardinality": null
        },
        {
            "name": "LONGDESC",
            "source": "SETS",
            "remarks": "Relationship to get long description table from SETS.",
            "whereClause": "ldkey=:setsid and ldownertable = 'SETS'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "SHIFT",
            "remarks": "Relationship to get long description table from SHIFT.",
            "whereClause": "ldkey=:shiftid and ldownertable = 'SHIFT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "SIGOPTION",
            "remarks": "Relationship to get long description table from SIGOPTION.",
            "whereClause": "ldkey=:sigoptionid and ldownertable = 'SIGOPTION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "SITE",
            "remarks": "Relationship to get long description table from SITE.",
            "whereClause": "ldkey=:siteuid and ldownertable = 'SITE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "TKTEMPLATE",
            "remarks": "Relationship to get long description table from TKTEMPLATE.",
            "whereClause": "ldkey=:tktemplateid and ldownertable = 'TKTEMPLATE'",
            "cardinality": null
        },
        {
            "name": "LONGDESC",
            "source": "TKTEMPLTACTIVITY",
            "remarks": "Relationship to get long description table from TKTEMPLTACTIVITY.",
            "whereClause": "ldkey=:tktempltactivityid and ldownertable = 'TKTEMPLTACTIVITY'",
            "cardinality": null
        },
        {
            "name": "LONGDESC",
            "source": "WFASSIGNMENT",
            "remarks": "Relationship to get long description table from WFASSIGNMENT.",
            "whereClause": "ldkey=:wfassignmentid and ldownertable = 'WFASSIGNMENT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "WFINTERACTION",
            "remarks": "Relatioship to get long description table from WFINTERACTION.",
            "whereClause": "ldkey=:wfinteractionid and ldownertable='WFINTERACTION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "WFNODE",
            "remarks": "Relationship to get long description table from WFNODE.",
            "whereClause": "ldkey=:wfnodeid and ldownertable = 'WFNODE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "source": "WFPROCESS",
            "remarks": "Relationship to get long description table from WFPROCESS.",
            "whereClause": "ldkey=:wfprocessid and ldownertable = 'WFPROCESS'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "source": "WORKORDER",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for workorder. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:workorderid and ldownertable = 'WORKORDER'",
            "cardinality": null
        }
    ]
}