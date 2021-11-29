mos = {
    "objectName": "MAXPROP",
    "className": "psdi.app.system.MaxPropSet",
    "description": "Maximo Properties",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXPROPID",
    "primaryKeyColumns": [
        "PROPNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXPROP",
            "targetObject": "MAXPROPINSTANCE",
            "parentKeys": "PROPNAME",
            "targetKeys": "PROPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Property",
            "longDescription": null
        },
        {
            "objectName": "MAXPROP",
            "targetObject": "MAXPROPVALUE",
            "parentKeys": "PROPNAME",
            "targetKeys": "PROPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Property",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXPROP",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXPROP",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXPROPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPNAME",
            "required": true,
            "persistent": true,
            "title": "Property Name",
            "remarks": "Property name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of this property",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTYPE",
            "required": true,
            "persistent": true,
            "title": "Data Type",
            "remarks": "Maximo data type for values of this property (ALN, INTEGER, YORN)",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "GLOBALONLY",
            "required": true,
            "persistent": true,
            "title": "Global Only",
            "remarks": "Indicates whether this property must exist only at a system-wide level.  If true, this property cannot have an instance-specific value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTANCEONLY",
            "required": true,
            "persistent": true,
            "title": "Instance Only",
            "remarks": "Indicates whether this property must be defined only at the instance level.  If true, an instance-specific value must be defined for each servername and there will be no global value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXIMODEFAULT",
            "required": false,
            "persistent": true,
            "title": "Maximo Default",
            "remarks": "The default value used in a new Maximo installation.  This supports refreshing all properties with the system defaults.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LIVEREFRESH",
            "required": true,
            "persistent": true,
            "title": "Live Refresh",
            "remarks": "Indicates whether live refresh of cache is supported for this property.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENCRYPTED",
            "required": true,
            "persistent": true,
            "title": "Encrypted",
            "remarks": "Indicates whether the value of the property should be encrypted when stored on the MaxPropValue table.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": true,
            "title": "Domain",
            "remarks": "The validation domain for values of this property.",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "NULLSALLOWED",
            "required": true,
            "persistent": true,
            "title": "Nulls Allowed",
            "remarks": "Indicates whether a null value is permitted on MaxPropValue for this property.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SECURELEVEL",
            "required": true,
            "persistent": true,
            "title": "Security Level",
            "remarks": "Indicates the level of access permitted for this property",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Indicates whether this property was delivered with Maximo or was defined by a user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ONLINECHANGES",
            "required": true,
            "persistent": true,
            "title": "Online Changes Allowed",
            "remarks": "Indicates whether the user is allowed to override the value via the Property application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CACHEDVALUE",
            "required": false,
            "persistent": false,
            "title": "Current Value",
            "remarks": "The current value of this property used by this server instance.",
            "sameAsAttribute": "MAXIMODEFAULT",
            "sameAsObject": "MAXPROP"
        },
        {
            "attributeName": "FILEOVERRIDE",
            "required": true,
            "persistent": false,
            "title": "File Override",
            "remarks": "Identifies whether this property value was obtained from a file (as opposed to the database).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The User ID who last changed this row.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "The timestamp of the last changed applied to this row.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPPROPVALUE",
            "required": false,
            "persistent": false,
            "title": "Global Value",
            "remarks": "To display propvalue",
            "sameAsAttribute": "MAXIMODEFAULT",
            "sameAsObject": "MAXPROP"
        },
        {
            "attributeName": "MASKED",
            "required": true,
            "persistent": true,
            "title": "Masked",
            "remarks": "Identified whether this value is masked in the System Properties application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCESSTYPE",
            "required": false,
            "persistent": true,
            "title": "Access Type",
            "remarks": "Access Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUERULES",
            "required": false,
            "persistent": true,
            "title": "Value Rules",
            "remarks": "Value Rules",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXPROPLIVE",
            "target": "MAXPROP",
            "remarks": "Relationship for live refresh",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROPINSTANCE",
            "target": "MAXPROPINSTANCE",
            "remarks": "Relationship for instance value",
            "whereClause": "propname = :propname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROPINSVAL",
            "target": "MAXPROPVALUE",
            "remarks": "Relationship for instance value",
            "whereClause": "propname = :propname and servername not in ('COMMON')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROPVALUE",
            "target": "MAXPROPVALUE",
            "remarks": "Relationship from MaxProp to MaxPropValue.",
            "whereClause": "propname = :propname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROPGLOB",
            "target": "MAXPROPVALUE",
            "remarks": "Relationship for global value",
            "whereClause": "propname = :propname and servername = 'COMMON'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DEFAULTFOLDERPROP",
            "source": "MAXLOGAPPENDER",
            "remarks": "Relationship to get the default logging folder property",
            "whereClause": "propname='mxe.logging.rootfolder'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTFOLDERPROP",
            "source": "MAXLOGGER",
            "remarks": "Relationship to get the default logging folder property",
            "whereClause": "propname='mxe.logging.rootfolder'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROPLIVE",
            "source": "MAXPROP",
            "remarks": "Relationship for live refresh",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROP",
            "source": "MAXPROPVALUE",
            "remarks": "Relationship from MaxPropValue to MaxProp.",
            "whereClause": "propname = :propname",
            "cardinality": "UNDEFINED"
        }
    ]
}