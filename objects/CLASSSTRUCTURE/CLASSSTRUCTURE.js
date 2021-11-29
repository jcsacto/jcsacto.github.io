mos = {
    "objectName": "CLASSSTRUCTURE",
    "className": "psdi.app.assetcatalog.ClassStructureSet",
    "description": "A Structured Hierarchy of Asset Classifications",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CLASSSTRUCTUREUID",
    "primaryKeyColumns": [
        "CLASSSTRUCTUREID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ACTCI",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ACTCISPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSET",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CDMCITYPES",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CI",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CISPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CISPECHIS",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ACTCICLASSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CICLASSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "TOPACTCICLASSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "TOPCICLASSID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CITYPESTATUS",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure Ancestor",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSANCESTOR",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSSTRUCTURE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSUSEWITH",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "FEATURES",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "FEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "INCIDENT",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "INVOICELINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ITEM",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ITEMSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "JOBPLAN",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "JOBTASK",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "LOCATIONS",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "MRLINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PDSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PLUSCTPSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "POLINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PRLINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PROBLEM",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONATTRCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ASSETCLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONATTRCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONCOMPFLTRAST",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONCOMPFLTRDPA",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONLINKCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ASSETCLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONLINKCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ASSETCLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONRCDCLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONRULECLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "ASSETCLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RECONRULECLAUSE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "DPACLASSSTRUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATION",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATIONRULES",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "SOURCECLASS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATIONRULES",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "TARGETCLASS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATIONRULESEXT",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "SOURCECLASS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATIONRULESEXT",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "TARGETCLASS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RFQLINE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SERVICEITEMS",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SKDEXTRACAPTOOLVIEW",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Tool Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SLA",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SOLUTION",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SOLUTIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SR",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TICKET",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Ticket Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TKTEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TKTEMPLATESPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TKTEMPLTACTIVITY",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TKTEMPLTACTYSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TOOLINV",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TOOLITEM",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "WOACTIVITY",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Strcuture",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "WOCHANGE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "WORELEASE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Release Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "WORKORDER",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSIFICATION",
            "targetObject": "CLASSSTRUCTURE",
            "parentKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "targetKeys": "CLASSIFICATIONID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Classification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CLASSSTRUCTURE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Class Structure",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "CLASSSTRUCTURE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CLASSSTRUCTURE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSSTRUCTURE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the selected asset class structure.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GENASSETDESC",
            "required": true,
            "persistent": true,
            "title": "Generate Description",
            "remarks": "Generate asset description when using this class structure?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description for Class Structure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent Class Structure",
            "remarks": "Parent Class Structure",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CLASSIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification ID of the node",
            "sameAsAttribute": "CLASSIFICATIONID",
            "sameAsObject": "CLASSIFICATION"
        },
        {
            "attributeName": "USECLASSINDESC",
            "required": true,
            "persistent": true,
            "title": "Use Classification",
            "remarks": "Use Classification in Generated  Description?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Defines the type of the node. Common uses would be Solution Content, Asset Classifications, FAQ, etc.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Classification",
            "remarks": "When you specify a classification for an object, you can organize related parent and child objects in a hierarchical structure, similar to a file directory. You can then drill up and down through the hierarchy to view associated items. Create and manage classifications in the Classifications application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "CLASSSTRUCTUREUID",
            "required": true,
            "persistent": true,
            "title": "CLASSSTRUCTUREUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": true,
            "title": "Has Children",
            "remarks": "Does this node have child nodes?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has a Parent",
            "remarks": "Does this node belong to a parent node?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "The Name of this object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PARENTCLASSIFICATIONID",
            "required": false,
            "persistent": false,
            "title": "Parent Classification",
            "remarks": "The parent classificationid of the classstructure",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSIFICATIONDESC",
            "required": false,
            "persistent": false,
            "title": "Classification Desc",
            "remarks": "The description for the classification entered in this classstructure object",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "CLASSIFICATION"
        },
        {
            "attributeName": "DESCRIPTION_CLASS",
            "required": false,
            "persistent": false,
            "title": "Class Description",
            "remarks": "Description of the classification specified for this record",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "CLASSIFICATION"
        },
        {
            "attributeName": "CLASSIFICATIONDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Classification Desc Long description",
            "remarks": "Long Description for Classification Desc",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWINASSETTOPO",
            "required": false,
            "persistent": true,
            "title": "Show Asset In Topology",
            "remarks": "Show In Asset Topology Viewer",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ACTCI table, used to find the ACTCI records for a given classstructure. (classstructure.classstructureid = actci.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all asset associated with the given class structure. (asset.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETS_ONLY",
            "target": "ASSET",
            "remarks": "Relationship to the asset table, used to find the asset records for a given classstructure. (classstructure.classstructureid = asset.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the assetattribute table, used to find all assetattribute records for a given orgnization. (assetattribute.orgid = classstructure.orgid). The resulting set will contain zero or objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find any asset specification records for the given class structure. (assetspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": " Relationship to the CI table, used to find the CI records for a given classstructure. (classstructure.classstructureid = CI.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI_ONLY",
            "target": "CI",
            "remarks": " Relationship to the CI table, used to find the CI records for a given classstructure. (classstructure.classstructureid = CI.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": " classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CITEMPLATE",
            "target": "CITEMPLATE",
            "remarks": "Relationship to the CITEMPALTE table, used to find the citemplate record for the classification. The resulting set will contain zero or more objects",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (classstructure.classsificationid = classancestor.classificationid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR_ANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (classstructure.classsificationid = classancestor.ancestorclassid). The resulting set will contain zero or more objects.",
            "whereClause": "ancestorclassid=:classificationid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSIFICATION",
            "target": "CLASSIFICATION",
            "remarks": "Relationship to the classification table, used to find the classification record for a given classstructure. (classification.classificationid = classstructure.classificationid and classification.orgid = classstructure.orgid). The resulting set will contain one object.",
            "whereClause": "classificationid=:classificationid and ((:orgid is null and orgid is null) or  (:orgid is not null and orgid = :orgid)) and ((:siteid is null and siteid is null) or  (:siteid is not null and siteid = :siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSIFICATION_ADD",
            "target": "CLASSIFICATION",
            "remarks": "Relationship to the classification table, used to find the classification records for a given classstructure. (classstructure.classificationid = classification.classificationid). The resulting set will contain zero or more objects.",
            "whereClause": "classificationid=:classificationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSIFICATION_ALL",
            "target": "CLASSIFICATION",
            "remarks": "Relationship to the classification table, used to find all classification records for a given orgnization. (classification.orgid = classstructure.orgid). The resulting set will contain zero or objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find any class specification records for the given class structure.  (classspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find a class structure for a given classstructure. (classstructure.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the parent classstructure record for a given classstructure. (classstructure.classificationid = classstructure.parent and classstructure.orgid = classstructure.orgid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:parent",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the child records for a given classstructure. (classstructure.classificationid = classstructure.parent and classstructure.orgid = classstructure.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORS",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship for classstructure ancestors",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSUSEWITH",
            "target": "CLASSUSEWITH",
            "remarks": "Relationship to the classusewith table, used to find the classusewith records for a given classstructure. (classstructure.classstructureid=classusewith.classstructureid) The resulting set will contain zero or more object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "FEATURES",
            "target": "FEATURES",
            "remarks": "Relationship to the features table, used to find the features records for a given classstructure.(classstructure.classstructureid = features.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURES_ONLY",
            "target": "FEATURES",
            "remarks": "Relationship to the features table, used to find the features records for a given classstructure.(classstructure.classstructureid =features.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "target": "IMGLIB",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given class structure. (imglib.refobject='CLASSSTRUCTURE'; and imglib.refobjectid=:classstructure$CLASSSTRUCTURE.CLASSSTRUCTUREUID). The resulting set will contain zero or one object.",
            "whereClause": "refobject = 'CLASSSTRUCTURE' and refobjectid = :classstructureuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the invoiceline table, used to find the invoiceline records for a given classstructure. (classstructure.classstructureid = invoiceline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE_ONLY",
            "target": "INVOICELINE",
            "remarks": "Relationship to the invoiceline table, used to find the invoiceline records for a given classstructure.(classstructure.classstructureid =invoicelne .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find all items associated with the given class structure. (item.classstructureid = classstructure.classstructureid and item.itemsetid = (select itemsetid from organization where orgid =  classstructure.orgid)). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMS_ONLY",
            "target": "ITEM",
            "remarks": "Relationship to the item table, used to find the item records for a given classstructure. (classstructure.classstructureid = item.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find any item specification records for the given class structure. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan table, used to find the jobplan records for a given classstructure. (classstructure.classstructureid = jobplan.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN_ONLY",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan table, used to find the jobplan records for a given classstructure.(classstructure.classstructureid =jobplan.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASK",
            "target": "JOBTASK",
            "remarks": "Relationship to the jobtask table, used to find the jobtask records for a given classstructure. (classstructure.classstructureid = jobtask.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTASK_ONLY",
            "target": "JOBTASK",
            "remarks": "Relationship to the jobtask table, used to find the jobtask records for a given classstructure.(classstructure.classstructureid =jobtask.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all locations associated with the given class structure. (locations.classstructureid = classstructure.classstructureid).  The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations table, used to find the locations record for a given classsstructure. (classstructure.classstructureid=classspecusewith.classstructureid) The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS_ONLY",
            "target": "LOCATIONS",
            "remarks": "Relationship to the item table, used to find the locations records for a given classstructure. (classstructure.classstructureid = locations.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find any location specification records for the given class structure. (locationspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from CLASSSTRUCTURE.",
            "whereClause": "ldkey=:classstructureuid and ldownertable = 'CLASSSTRUCTURE'",
            "cardinality": "SINGLE"
        },
        {
            "name": "MEASUREUNIT",
            "target": "MEASUREUNIT",
            "remarks": "Relationship to the measureunit table, used to find all measureunit records for a given orgnization. (measureunit.orgid = classstructure.orgid). The resulting set will contain zero or objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "target": "MRLINE",
            "remarks": "Relationship to the mrline table, used to find the mrline records for a given classstructure. (classstructure.classstructureid = mrline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE_ONLY",
            "target": "MRLINE",
            "remarks": "Relationship to the mrline table, used to find the mrline records for a given classstructure.(classstructure.classstructureid =mrline .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the poline table, used to find the poline records for a given classstructure. (classstructure.classstructureid = poline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE_ONLY",
            "target": "POLINE",
            "remarks": "Relationship to the poline table, used to find the poline records for a given classstructure.(classstructure.classstructureid =poline .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the prline table, used to find the prline records for a given classstructure. (classstructure.classstructureid = prline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE_ONLY",
            "target": "PRLINE",
            "remarks": "Relationship to the prline table, used to find the prline records for a given classstructure.(classstructure.classstructureid =prline .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "target": "RELATION",
            "remarks": "Relationship to the relation table, used to find the relation records for a given classstructure.(classstructure.classstructureid = relation.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION_ONLY",
            "target": "RELATION",
            "remarks": "Relationship to the relation table, used to find the relation records for a given classstructure.(classstructure.classstructureid = relation.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the rfqline table, used to find the rfqline records for a given classstructure. (classstructure.classstructureid = rfqline.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE_ONLY",
            "target": "RFQLINE",
            "remarks": "Relationship to the rfqline table, used to find the rfqline records for a given classstructure.(classstructure.classstructureid =rfqline .classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "target": "SLA",
            "remarks": "Relationship to the sla table, used to find the sla records for a given classstructure. (classstructure.classstructureid = sla.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTION",
            "target": "SOLUTION",
            "remarks": "Relationship to the solution table, used to find the solution records for a given classstructure. (classstructure.classstructureid in (select classstructureid from classancestor where ancestor=classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)  and status in (select value from synonymdomain where domainid='SOLUTIONSTATUS' and maxvalue='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTION_USEWITH",
            "target": "SOLUTION",
            "remarks": "Relationship to the solution table, used to find the solution records for a given classstructure. (classstructure.classstructureid in (select classstructureid from classancestor where ancestor=classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOLUTIONS_ONLY",
            "target": "SOLUTION",
            "remarks": "Relationship to the solution table, used to find the solution records for a given classstructure. (classstructure.classstructureid = solution.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SR",
            "target": "SR",
            "remarks": "Relationship to the SR table, used to find the SR records for a given classstructure. (classstructure.classstructureid = sr.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": "Relationship to the ticket table, used to find the ticket records for a given classstructure. (classstructure.classstructureid = ticket.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKETS_ONLY",
            "target": "TICKET",
            "remarks": "Relationship to the ticket table, used to find the ticket records for a given classstructure. (classstructure.classstructureid = ticket.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATE",
            "target": "TKTEMPLATE",
            "remarks": "Relationship to the SR table, used to find the tktemplate records for a given classstructure. (classstructure.classstructureid = tktemplate.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLTACTIVITY",
            "target": "TKTEMPLTACTIVITY",
            "remarks": "Relationship to the SR table, used to find the tktemplate activity records for a given classstructure. (classstructure.classstructureid = tktemplatactivity.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOACTIVITY",
            "target": "WOACTIVITY",
            "remarks": "Relationship to the woactivity table, used to find the woctivity records for a given classstructure. (classstructure.classstructureid = woctivity.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCHANGE",
            "target": "WOCHANGE",
            "remarks": "Relationship to the wochange table, used to find the wochange records for a given classstructure. (classstructure.classstructureid = wochange.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORELEASE",
            "target": "WORELEASE",
            "remarks": "Relationship to the woactivity table, used to find the woctivity records for a given classstructure. (classstructure.classstructureid = woctivity.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder table, used to find the workorder records for a given classstructure. (classstructure.classstructureid = workorder.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDERS_ONLY",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder table, used to find the workorder records for a given classstructure. (classstructure.classstructureid = workorder.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CLASSSTRUCTURE",
            "source": "ACTCI",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given Actual CI specification. (classstructure.classstructureid = actci.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCLASSSTRUCTURE",
            "source": "ACTCIRELATION",
            "remarks": "Relationship to the CLASSSTRUCTURE table for the targetci",
            "whereClause": "classstructureid in (select classstructureid from actci where actcinum=:targetci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECLASSSTRUCTURE",
            "source": "ACTCIRELATION",
            "remarks": "Relationship to the CLASSSTRUCTURE table for the souceci",
            "whereClause": "classstructureid in (select classstructureid from actci where actcinum=:sourceci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "ASSET",
            "remarks": "Relationship to the ClassStructure table, used to find all classstructures for a given asset. (classstructure.classstructureid = asset.classstructureid). This resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_CLASS_STRUCT",
            "source": "ASSET",
            "remarks": null,
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "SINGLE"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given assetfeature (classstructure.classstructureid=assetfeatue.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "ASSETFEATUREHIST",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given assetfeaturehist (classstructure.classstructureid=assetfeaturehist.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "ASSETSPEC",
            "remarks": "Relationship to the ClassStructure table, used to find all class structures for a given asset specification. (classstructure.classstructureid = assetspec.classstructureid). This resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "CDMCITYPES",
            "remarks": "Relationship to the ClassStructure table. The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "CI",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given CI specification. (classstructure.classstructureid = ci.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCICLASSSTRUCTURE",
            "source": "CIRELATION",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to get the classification for a given targetci.",
            "whereClause": "classstructureid in (select classstructureid from ci where cinum=:targetci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECICLASSSTRUCTURE",
            "source": "CIRELATION",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to get the classification for a given sourceci.",
            "whereClause": "classstructureid in (select classstructureid from ci where cinum=:sourceci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CICLASSID",
            "source": "CITEMPLATE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the classstructure for the ci classstructure  id",
            "whereClause": "classstructureid=:ciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCICLASSID",
            "source": "CITEMPLATE",
            "remarks": "Relationship to the classstucture table, used to find the classstucture record for classstructure id.",
            "whereClause": "classstructureid=:actciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPACTCICLASSID",
            "source": "CITEMPLATE",
            "remarks": "Relationship to the classstucture table, used to find the classstucture record for classstructure id.",
            "whereClause": "classstructureid=:topactciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPCICLASSID",
            "source": "CITEMPLATE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the classstructure for the ci classstructure  id",
            "whereClause": "classstructureid=:topciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "CLASSIFICATION",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given classification. (classification.classificationid = classstructure.classificationid and classification.orgid = classstructure.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "classificationid=:classificationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "CLASSSPECUSEWITH",
            "remarks": "Relationship to the classstructure table, used to find the classstructure record for a given classsspecusewith. (classstructure.classstructureid=classspecusewith.classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find a class structure for a given classstructure. (classstructure.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the parent classstructure record for a given classstructure. (classstructure.classificationid = classstructure.parent and classstructure.orgid = classstructure.orgid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:parent",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the child records for a given classstructure. (classstructure.classificationid = classstructure.parent and classstructure.orgid = classstructure.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORS",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship for classstructure ancestors",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "CLASSUSEWITH",
            "remarks": "Relationship to the classstructure table, used to find the classstructure record for a given classsusewith. (classstructure.classstructureid=classusewith.classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "EXPBUILDER",
            "remarks": "Relationship for classstructure",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPCLASST",
            "source": "EXPBUILDER",
            "remarks": "Relationship for classstructure",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "FEATURES",
            "remarks": "Relationship to the classstruvcture table, used to find the classstructure record for a given feature. (features.classstructureid=classstructure.classstructureid) The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "INVOICELINE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "ITEM",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure for a given item. (classstructure.classstructureid = item.classstructureid and classspec.orgid = (select orgid from organization where itemsetid = item.itemsetid)). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM_CLASS_STRUCT",
            "source": "ITEM",
            "remarks": null,
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "ITEMSPEC",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "JOBPLAN",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given jobplan (classstructure.classstructureid=jobplan.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "JOBTASK",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given jobtask (classstructure.classstructureid=jobtask.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "JOBTASKSPEC",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given jobtaskspec (classstructure.classstructureid=jobtaskspec.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "LOCATIONS",
            "remarks": "Relationship to the ClassStructure table, used to find the class structure which contains the operating location's ClassStructureId. (locations.classstructureid =classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOC_CLASS_STRUCT",
            "source": "LOCATIONS",
            "remarks": null,
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "LOCATIONSPEC",
            "remarks": "Relationship to the ClassStructure table, used to find the class specfication identifier of a given location specification. (locationspec.classstructureid = classstructure.classstructureid). The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "MAXLECONTEXT",
            "remarks": "Relates the LE context resource classification ID to the classstructure table",
            "whereClause": "classstructureid=:resourceclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTHCICLASS",
            "source": "MAXVARINPUT",
            "remarks": "Relationship for looking up Classstructure from Authoirzed CI top-tevel class (classstructureid = :authciclass). Returns zero or one record.",
            "whereClause": "classstructureid=:authciclass",
            "cardinality": null
        },
        {
            "name": "CICLASS",
            "source": "MAXVARINPUT",
            "remarks": "Relationship for looking up Classstructure from CI top-tevel class (classstructureid = :ciclass). Returns zero or one record.",
            "whereClause": "classstructureid = :ciclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITASSET",
            "source": "MAXVARINPUT",
            "remarks": "Relationship for looking up Classstructure from IT top-tevel class (classstructureid = :itasset). Returns zero or one record.",
            "whereClause": "classstructureid = :itasset",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITSFW",
            "source": "MAXVARINPUT",
            "remarks": "Relationship for looking up Classstructure from IT Software top-tevel class (classstructureid = :itsfw). Returns zero or one record.",
            "whereClause": "classstructureid = :itsfw",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "MRLINE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "PDSPEC",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to the Classstructure table (classstructure.classstructureid = plusctemplate.classtructureid",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "POLINE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "PRLINE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CICLASSID",
            "source": "PROMOTEACTCI",
            "remarks": "Relationship to the classstucture table, used to find the classstucture record for classstructure id",
            "whereClause": "classstructureid=:ciclassid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_CLASSSTRUCTURE",
            "source": "RECONATTRCLAUSE",
            "remarks": "Asset Class Structure description",
            "whereClause": "classstructureid=:assetclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_DPACLASSSTRUCTURE",
            "source": "RECONATTRCLAUSE",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_CLASSSTRUCTURE",
            "source": "RECONCOMPFLTRAST",
            "remarks": "Asset Class Structure description",
            "whereClause": "classstructureid=:assetclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_DPACLASSSTRUCTURE",
            "source": "RECONCOMPFLTRAST",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_CLASSSTRUCTURE",
            "source": "RECONCOMPFLTRDPA",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_DPACLASSSTRUCTURE",
            "source": "RECONCOMPFLTRDPA",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_DPACLASSSTRUCTURE",
            "source": "RECONLINKCLAUSE",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_CLASSSTRUCTURE",
            "source": "RECONLINKCLAUSE",
            "remarks": "Asset Class Structure description",
            "whereClause": "classstructureid=:assetclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_DPACLASSSTRUCTURE",
            "source": "RECONRCDCLAUSE",
            "remarks": "Data Set 2 Class Structure description",
            "whereClause": "classstructureid=:dpaclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_CLASSSTRUCTURE",
            "source": "RECONRCDCLAUSE",
            "remarks": "Asset Class Structure description",
            "whereClause": "classstructureid=:assetclassstructid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "RELATION",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given Relation specification. (classstructure.classstructureid = relation.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECLASS",
            "source": "RELATIONRULES",
            "remarks": "Relationship to the  classstructure table, used to find a class structure record for a given relationrules source specification.",
            "whereClause": "classstructureid=:sourceclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCLASS",
            "source": "RELATIONRULES",
            "remarks": "Relationship to the  classstructure table, used to find a class structure record for a given relationrules target specification.",
            "whereClause": "classstructureid=:targetclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECLASS",
            "source": "RELATIONRULESEXT",
            "remarks": "Class structure relationship",
            "whereClause": "classstructureid=:sourceclass",
            "cardinality": null
        },
        {
            "name": "TARGETCLASS",
            "source": "RELATIONRULESEXT",
            "remarks": "Class structure relationship",
            "whereClause": "classstructureid=:targetclass",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "RFQLINE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "SEARCHSOLUTION",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the CLASSSTRUCTURE record for a given solution. (classstructure.classstructureid = searchsolution.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "SLA",
            "remarks": "Relationship for classstructure",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "SOLUTION",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the CLASSSTRUCTURE record for a given solution. (classstructure.classstructureid = solution.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "TICKET",
            "remarks": "Relationship to the classstructure table, used to find the classstructure for a given ticket record. (ticket.classstructureid = classstructure.classstructureid and  ticket.orgid = classstructure.orgid). The resulting set will contain zero or 1 object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "TICKETSPEC",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given ticket specification. (ticketspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "TKTEMPLATE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the CLASSSTRUCTURE record for a given ticket template. (classstructure.classstructureid = solution.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "TKTEMPLTACTIVITY",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to find the CLASSSTRUCTURE record for a given ticket template activity. (classstructure.classstructureid = solution.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "TKTEMPLTACTYSPEC",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (TKTEMPLTACTYSPEC.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "TLOAMPRMDFLT",
            "remarks": "Relationship from Computer Promotion Defaults to Classstructure Returns zero or one record.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTUREIT",
            "source": "TLOAMPRMDFLT",
            "remarks": "Relationship from Computer Promotion to lookup for Classstructure, limited to the root IT calssification only.",
            "whereClause": "classstructureid in (select a.classstructureid from classancestor a where a.ancestor=(coalesce((select varvalue from maxvars where siteid = :siteid and varname = 'ITASSET'),(select varvalue from maxvars where siteid is null and varname = 'ITASSET'))))",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "TLOAMPRMVALUE",
            "remarks": "Relationship from Computer Promotion Values to Classstructure Returns zero or one record.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTUREIT",
            "source": "TLOAMPRMVALUE",
            "remarks": "Relationship from Computer Promotion to lookup for Classstructure, limited to the root IT calssification only.",
            "whereClause": "classstructureid in (select a.classstructureid from classancestor a where a.ancestor=(coalesce((select varvalue from maxvars where siteid = :siteid and varname = 'ITASSET'),(select varvalue from maxvars where siteid is null and varname = 'ITASSET'))))",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion to Classstructure Returns zero or more records.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTUREIT",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion to lookup for Classstructure, limited to the root IT calssification only.",
            "whereClause": "classstructureid in (select a.classstructureid from classancestor a where a.ancestor=(coalesce((select varvalue from maxvars where siteid = :siteid and varname = 'ITASSET'),(select varvalue from maxvars where siteid is null and varname = 'ITASSET'))))",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "WFEXPBUILDER",
            "remarks": "Relationship for classstructure",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPCLASST",
            "source": "WFEXPBUILDER",
            "remarks": "Relationship for classstructure",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "source": "WORKORDER",
            "remarks": "Relationship to the classstructure table, used to find the classstructure for a given workorder record. (workorder.classstructureid = classstructure.classstructureid and  workorder.orgid = classstructure.orgid). The resulting set will contain zero or 1 object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "SINGLE"
        }
    ]
}