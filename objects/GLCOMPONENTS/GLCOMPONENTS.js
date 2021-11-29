mos = {
    "objectName": "GLCOMPONENTS",
    "className": "psdi.app.financial.GLComponentsSet",
    "description": "The GL Componets Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "GLCOMPONENTSID",
    "primaryKeyColumns": [
        "ORGID",
        "GLORDER",
        "COMPVALUE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "GLCONFIGURE",
            "targetObject": "GLCOMPONENTS",
            "parentKeys": "GLORDER, ORGID",
            "targetKeys": "GLORDER, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "GL Components",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "GLCOMPONENTS",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "GLCOMPONENTS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "GLCOMPONENTS",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 88",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "GLORDER",
            "required": true,
            "persistent": true,
            "title": "GL Order",
            "remarks": "Order of this component in GL Account.",
            "sameAsAttribute": "GLORDER",
            "sameAsObject": "GLCONFIGURE"
        },
        {
            "attributeName": "COMPVALUE",
            "required": true,
            "persistent": true,
            "title": "GL Component Value",
            "remarks": "GL component value. The value must conform to format specified in GL Account Configuration dialog box in Database Configuration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPTEXT",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the GL component--what the value represents in terms of financial tracking. For example, Administration Services.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Specifies whether the component value can currently be used in the Select GL Account dialog box. If the check box is selected (the default), the Select GL Account dialog box will display the value. If the check box is cleared, the value will not be displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMPONENTSID",
            "required": true,
            "persistent": true,
            "title": "GLCOMPONENTSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEGMENTNAME",
            "required": false,
            "persistent": false,
            "title": "Segment",
            "remarks": "The component name.",
            "sameAsAttribute": "GLACCOUNTFIELD",
            "sameAsObject": "GLCONFIGURE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "GLCOMPONENTS",
            "source": "GLCONFIGURE",
            "remarks": "Relationship to GLComponents table. Orgid is a non-persistent attribute on GLConfigure table and is used here to get the correct components from GLComponents for a specific organization. This relationship is only used in Chart of Accounts app, if using anywhere else make sure you somehow populate the orgid first. (glorder = :glorder and orgid = :orgid). The resulting set will contain 0 or more objects.",
            "whereClause": "glorder = :glorder and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMGLCOMPONENT",
            "source": "GLCONFIGURE",
            "remarks": "glcomponents for gl",
            "whereClause": "glorder = :glorder and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLCOMPONENTS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the GlComponent table, used to find all general ledger components records for a given organization. (organization.orgid = glcomponents.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}