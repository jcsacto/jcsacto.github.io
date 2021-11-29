mos = {
    "objectName": "CLASSSPEC",
    "className": "psdi.app.assetcatalog.ClassSpecSet",
    "description": "Classification Template for Asset Specification",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CLASSSPECID",
    "primaryKeyColumns": [
        "CLASSSTRUCTUREID",
        "ASSETATTRID",
        "SECTION",
        "ORGID",
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "CLASSSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "CLASSSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Use With",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ATTRIBUTENAME, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ATTRIBUTENAME, SECTION, ORGID, SITEID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ATTRIBUTENAME, SECTION, ORGID1, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ATTRIBUTENAME, SECTION, ORGID1, SITEID1",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "PDSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "PDSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "TICKETSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "CLASSSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "CLASSSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "CLASSSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "CLASSSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, LINKEDTOATTRIBUTE, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
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
            "objectName": "MAXDOMAIN",
            "targetObject": "CLASSSPEC",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "CLASSSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 101",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "CLASSSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CLASSSPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CLASSSPEC",
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
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Asset attribute identifier",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Measure unit identifier",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": true,
            "title": "Domain",
            "remarks": "Domain identifier",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "ATTRDESCPREFIX",
            "required": false,
            "persistent": true,
            "title": "Description Prefix",
            "remarks": "Prefix used with attribute in genereted asset descriptions",
            "sameAsAttribute": "ATTRDESCPREFIX",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "CS01",
            "required": false,
            "persistent": true,
            "title": "Cs01",
            "remarks": "Cross-over field from AssetAttribute.AA01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CS02",
            "required": false,
            "persistent": true,
            "title": "Cs02",
            "remarks": "Cross-over field from AssetAttribute.AA02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CS03",
            "required": false,
            "persistent": true,
            "title": "Cs03",
            "remarks": "Cross-over field from AssetAttribute.AA03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CS04",
            "required": false,
            "persistent": true,
            "title": "Cs04",
            "remarks": "Cross-over field from AssetAttribute.AA04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CS05",
            "required": false,
            "persistent": true,
            "title": "Cs05",
            "remarks": "Cross-over field from AssetAttribute.AA05",
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
            "attributeName": "DATATYPE",
            "required": false,
            "persistent": false,
            "title": "Data Type",
            "remarks": "DATATYPE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPECVALUE",
            "required": false,
            "persistent": false,
            "title": "Search Value",
            "remarks": "SPECVALUE",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section for a Group of Attributes",
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
            "attributeName": "CLASSSPECID",
            "required": true,
            "persistent": true,
            "title": "Classification",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYDOWNHIER",
            "required": true,
            "persistent": true,
            "title": "Apply Down Hierarchy",
            "remarks": "If selected, this attribute is applied to all child classifications of this classification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INHERITEDFROM",
            "required": false,
            "persistent": true,
            "title": "Inherited from",
            "remarks": "The path to the parent classifications for this classification",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "INHERITEDFROMID",
            "required": false,
            "persistent": true,
            "title": "Inherited From ClassSpec",
            "remarks": "The referenced ClassSpec Id",
            "sameAsAttribute": "CLASSSPECID",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "TABLEATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Table Attribute",
            "remarks": "The attribute name for the table domain entered. It is required when the domain is populated.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LOOKUPNAME",
            "required": false,
            "persistent": true,
            "title": "Lookup Name",
            "remarks": "Lookup name for the table domain",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKEDTOATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Linked to Attribute",
            "remarks": "This attribute is linked to another attribute in this specification.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "LINKEDTOSECTION",
            "required": false,
            "persistent": true,
            "title": "Linked to Section",
            "remarks": "This section is linked to another section in this specification.",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "ASSETATTRIBUTEID",
            "required": false,
            "persistent": true,
            "title": "Asset Attribute Identifier",
            "remarks": "Foreign key to the Asset Attribute record",
            "sameAsAttribute": "ASSETATTRIBUTEID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "CONTINUOUS",
            "required": true,
            "persistent": true,
            "title": "Continuous",
            "remarks": "If the check box is cleared (the default), you can apply the attribute to a segment of the linear asset. If selected, the attribute spans the entire length of the associated linear asset. A continuous attribute can be a single attribute with start and end measures that are equal to the start and end measures of the linear asset. Or a continuous attribute can be one of multiple attributes that together span the entire linear asset without overlapping. To verify whether the attribute can be continuous, run the Linear Gap and Overlap report.",
            "sameAsAttribute": "CONTINUOUS",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "LINEARTYPE",
            "required": false,
            "persistent": true,
            "title": "Linear Type",
            "remarks": "Used for linear assets only. Identifies an attribute as point (end measure must equal the start measure) or linear (end measure must not equal the start measure). If no value is entered, the attribute is not displayed for linear assets.",
            "sameAsAttribute": "FEATURETYPE",
            "sameAsObject": "FEATURES"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find all asset associated with a given class specification. (asset.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the AssetAttribute table, used to find the asset attribute for a given class specification record. (assetattribute.assetattrid = classspec.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattributeid=:assetattributeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find any asset specification records derived from the given class specification record. (assetspec.classstructureid = classspec.classstructureid and assetspec.assetattrid = classspec.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and assetattrid=:assetattrid and ((:section is null and section is null) or (:section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPECCLASS",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find any asset specification records derived from the given class specification. (assetspec.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and (:section is null or (:section is not null and :section=section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPECUSEWITH",
            "target": "CLASSSPECUSEWITH",
            "remarks": "Relationship to the classspecusewith table, used to find the classspecusewith records for a given classspec. (classspec.classspecid=classspecusewith.classspecid) The resulting set will contain zero or more object.",
            "whereClause": "classspecid = :classspecid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find all items associated with a given class specification. (item.classstructureid = classspec.classstructureid and item.itemsetid = (select itemsetid from organization where orgid =  classspec.orgid)). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find any item specification records derived from the given class specification record. (itemspec.classstructureid = classspec.classstructureid and itemspec.assetattrid = classspec.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and assetattrid=:assetattrid and ((:section is null and section is null) or (:section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPECCLASS",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find any item specification records derived from the given class specification. (itemspec.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and (:section is null or (:section is not null and :section=section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all locations associated with a given class specification. (locations.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find any location specification records derived from the given class specification record. (locationspec.classstructureid = classspec.classstructureid and locationspec.assetattrid = classspec.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and assetattrid=:assetattrid and ((:section is null and section is null) or (:section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPECCLASS",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find any location specification records derived from the given class specification. (locationspec.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid and (:section is null or (:section is not null and :section=section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREUNIT",
            "target": "MEASUREUNIT",
            "remarks": "Relationship to the MeasureUnit table, used to find the measure unit definition for the given class structure record. (measureunit.measureunitid = classspec.measureunitid ). The resulting set will contain zero or one object.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CLASSSPEC",
            "source": "ACTCI",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given actual configuration item (classspec.classstructureid = actci.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "ACTCISPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given actcispec. (actcispec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "ASSET",
            "remarks": "Relationship to the ClassSpec table, used to find all class specifications for a given asset. (classspec.classstructureid = asset.classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "ASSETATTRIBUTE",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification  records that use the given asset attribute. (classspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given assetfeature (classspec.classstructureid = assetfeature.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "ASSETFEATURESPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec records for a given assetfeaturespec. (assetfeaturespec.assetattrid=classspec.assetattrid and assetfeaturespec.classstructureid=classspec.classstructureid and assetfeaturespec.sectiond=classspec.section.) The resulting set will contain zero or more objects.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "ASSETSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specifications for a given asset specification. (classstructure.classstructureid = assetspec.classstructureid and assetattribute.assetattrid = assetspec.assetattrid). This resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid and assetattrid=:assetattrid and (section is null or (section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "CI",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given configuration item (classspec.classstructureid = ci.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "CISPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given cispec. (cispec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "CLASSSPECUSEWITH",
            "remarks": "Relationship to the classspec table, used to find the classspec records for a given classspecusewith. (classspec.classspecid=classspecusewith.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid = :classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassSpec table, used to find any class specification records for the given class structure.  (classspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CLASSSPEC",
            "source": "FEATURES",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given feature (classspec.classstructureid = features.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "FEATURESPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec records for a given feature. (featurespec.assetattrid=classspec.assetattrid and featurespec.classstructureid=classspec.classstructureid and featurespec.sectiond=classspec.section.) The resulting set will contain zero or more objects.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "INVOICELINE",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (classstructureid=:classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "ITEM",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given item. (classspec.classstructureid = item.classstructureid and classspec.orgid = (select orgid from organization where itemsetid = item.itemsetid)). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "ITEMSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find a class spec for a given item specification. (itemspec.classstructureid = classspec.classstructureid and itemspec.assetattrid = classspec.assetattrid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid and assetattrid=:assetattrid and (section is null or (section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "JOBPLAN",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given jobplan (classspec.classstructureid = jobplan.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "JOBPLANSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given jobplanspec. (jobplanspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "JOBTASK",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given jobtask (classspec.classstructureid = jobtask.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "JOBTASKSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given jobtaskspec. (jobtaskspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "LOCATIONS",
            "remarks": "Relationship to the ClassSpec table, used to find the class specifications which contain the operating location's ClassStructureId. (locations.classstructureid =classspec.classstructureid). The resulting set will contain zero or more objects. The class specifications are a set of attributes and are defined in Asset Catalog Setup.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "SINGLE"
        },
        {
            "name": "CLASSSPEC",
            "source": "LOCATIONSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find the base specification which the given location specification is derived from. (locationspec.classstructureid = classspec.classstructureid and locationspec.assetattrid = classspec.assetattrid ). The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid and assetattrid=:assetattrid and (section is null or (section is not null and section=:section))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the ClassSpec table, , used to find all class specification records that use the given measure unit. (classspec.measureunitid = measureunit.measureunitid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "MRLINE",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given MRLINESPEC. (MRLINESPEC.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "PDSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (pdspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "PLUSCTEMPLATE",
            "remarks": "relationship to the classspec table (classspec.classstructureid = plusctemplate.classstructureid",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSSPEC",
            "source": "PLUSCTPSPEC",
            "remarks": "Relationship to CLASSSPEC table",
            "whereClause": "classstructureid =:classstructureid and assetattrid=:assetattrid",
            "cardinality": null
        },
        {
            "name": "CLASSSPEC",
            "source": "POLINE",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (pdspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "PRLINE",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (classstructureid=:classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "RFQLINE",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (classstructureid=:classstructureid) The resulting set will contain one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "SOLUTION",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given solution (classspec.classstructureid = solution.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "SOLUTIONSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given solutionspec. (solutionspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "TICKET",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given ticket (classspec.classstructureid = ticket.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "TICKETSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given ticketspec. (ticketspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "TKTEMPLATE",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given TKTEMPLATESPEC. (TKTEMPLATESPEC.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "TKTEMPLATESPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given TKTEMPLATESPEC. (TKTEMPLATESPEC.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "TKTEMPLTACTIVITY",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given TKTEMPLATESPEC. (TKTEMPLATESPEC.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "TKTEMPLTACTYSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given TKTEMPLTACTYSPEC. (TKTEMPLTACTYSPEC.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "WORKORDER",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given workorder (classspec.classstructureid = workorder.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "source": "WORKORDERSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given workorderspec. (workordespec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        }
    ]
}