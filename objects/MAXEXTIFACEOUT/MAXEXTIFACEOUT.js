mos = {
    "objectName": "MAXEXTIFACEOUT",
    "className": "psdi.iface.app.extsystem.MaxExtIfaceOutSet",
    "description": "External Interface Outbound",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXEXTIFACEOUTID",
    "primaryKeyColumns": [
        "EXTSYSNAME",
        "IFACENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
            "longDescription": null
        },
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEOUT",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Outbound Inferface",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTIFACEOUT",
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
            "remarks": "change by",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "change by date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the outbound interface.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Publish Channel",
            "remarks": "Identifies an outbound interface that is associated with the external system.",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "MAXEXTIFACEOUTID",
            "required": true,
            "persistent": true,
            "title": "MAXEXTIFACEOUTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPORTWHERE",
            "required": false,
            "persistent": false,
            "title": "Export Condition",
            "remarks": "A SQL statement to select the records to be exported. The SELECT statement must apply to the primary (top-level) MBO in the integration object.",
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
            "attributeName": "MAXCOUNT",
            "required": false,
            "persistent": false,
            "title": "Export Count",
            "remarks": "user can give count for export",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": false,
            "persistent": true,
            "title": "End Point",
            "remarks": "Identifies the end point used by the external system. Outbound transactions are sent to this end point.",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": false,
            "title": "User Defined",
            "remarks": "User Defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXEXTSYSOUTCNTL",
            "target": "MAXEXTSYSCONTROL",
            "remarks": "Relationship from maxextifaceout to maxextsyscontrol table",
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
            "name": "MAXIFACEOUT",
            "target": "MAXIFACEOUT",
            "remarks": "Relationship to the MAXIFACEOUT table to find more details of a given interface. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEOUTCNTL",
            "target": "MAXIFACEOUTCNTL",
            "remarks": "Relationship from maxextifaceout to maxifaceoutcntl table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXEXTIFACEOUT",
            "source": "MAXENDPOINT",
            "remarks": "Relationship to all Publish Channel table. The resulting set will contain one or more row.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEOUT",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MAXEXTIFACEOUT table, used to find all external outbound interfaces for a given external system (maxextsystem.extsysname = maxextifaceout.extsysname) The resulting set will contain zero or more objects.",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEOUT",
            "source": "MAXIFACEOUT",
            "remarks": "Relationship to the MAXIFACEOUT table, used to find all in maps for a given ifacename . The resulting set will contain zero or more maps.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEOUTCNTL",
            "source": "MAXIFACEOUTCNTL",
            "remarks": "Relationship from maxifaceoutcntl to maxextifaceout table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        }
    ]
}