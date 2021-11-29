mos = {
    "objectName": "MAXEXTIFACEIN",
    "className": "psdi.iface.app.extsystem.MaxExtIfaceInSet",
    "description": "External Interface Inbound",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXEXTIFACEINID",
    "primaryKeyColumns": [
        "EXTSYSNAME",
        "IFACENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTIFACEIN",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXEXTIFACEIN",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Service Interface",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTIFACEIN",
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
            "attributeName": "EXTSYSNAME",
            "required": true,
            "persistent": true,
            "title": "External System",
            "remarks": "External System Name",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "ISCONTINUOUSQUEUE",
            "required": true,
            "persistent": true,
            "title": "Use Continuous Queue",
            "remarks": "Specifies whether the MEA writes inbound messages for the corresponding interface and external system to the sequential queue or the continuous queue. If the check box is selected, the MEA writes the messages to the continuous queue. A user sets this value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENABLED",
            "required": true,
            "persistent": true,
            "title": "Enabled",
            "remarks": "Specifies whether the corresponding interface is available for integration processing. If the check box is selected, the interface is available. If the check box is cleared (the default), the interface is unavailable. A user sets this value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "CHANGEBY",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "CHANGEDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the inbound interface.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Enterprise Service",
            "remarks": "Identifies an inbound interface that is associated with the external system.",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "MAXEXTIFACEINID",
            "required": true,
            "persistent": true,
            "title": "MAXEXTIFACEINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACETYPE",
            "required": false,
            "persistent": false,
            "title": "Adapter",
            "remarks": "Interface Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": false,
            "title": "User Defined",
            "remarks": "User Defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": false,
            "persistent": false,
            "title": "Operation",
            "remarks": "Message Type",
            "sameAsAttribute": "MESSAGETYPE",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "FILETYPE",
            "required": false,
            "persistent": false,
            "title": "File Type",
            "remarks": "Valid file types are XML and Flat File. A flat file is a text representation of the corresponding Maximo interface table. If you select Flat File, enter a value in the Delimiter field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELIMITER",
            "required": false,
            "persistent": false,
            "title": "Delimiter",
            "remarks": "Character that separates the data fields in a flat file to be imported into Maximo. The default value is a comma. Not applicable if the selected file type is XML.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPREVIEW",
            "required": true,
            "persistent": false,
            "title": "Import Preview",
            "remarks": "Using this Preview option, users will be able to verify that the structure and data content of a file is correct or if there will be errors importing it into Maximo.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXEXTSYSINCNTL",
            "target": "MAXEXTSYSCONTROL",
            "remarks": "Relationship from maxextifacein to maxextsyscontrol table",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSTEM",
            "target": "MAXEXTSYSTEM",
            "remarks": "Relationship to get the Extsystem",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEIN",
            "target": "MAXIFACEIN",
            "remarks": "Relationship to the MAXIFACEOUT table to find more details of a given interface. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEINCNTL",
            "target": "MAXIFACEINCNTL",
            "remarks": "Relationship from maxextifacein to maxifaceincnt table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACELOAD",
            "target": "MAXIFACELOAD",
            "remarks": "Relationship to the MAXIFACELOAD table, The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXWSREGISTRY",
            "target": "MAXWSREGISTRY",
            "remarks": "Relationship to get all WS Registry records for external system. It will return zero or more records.",
            "whereClause": "extsysname=:extsysname and servicename=:ifacename and source = 'Enterprise Service'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXEXTIFACEIN",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MAXEXTIFACEIN table, used to find all external inbound interfaces for a given external system (maxextsystem.extsysname = maxextifacein.extsysname) The resulting set will contain zero or more objects.",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEIN",
            "source": "MAXIFACEIN",
            "remarks": "Relationship to the MAXIFACEIN table, used to find all in maps for a given ifacename . The resulting set will contain zero or more maps.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEINCNTL",
            "source": "MAXIFACEINCNTL",
            "remarks": "Relationship from maxifaceincntl to maxextifacein table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        }
    ]
}