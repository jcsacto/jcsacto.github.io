mos = {
    "objectName": "OSLCRESOURCEDETAIL",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OslcResourceDetailSet",
    "description": "Table for oslc resource",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCRESOURCEDETAILID",
    "primaryKeyColumns": [
        "INTOBJECTNAME",
        "HIERARCHYPATH"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCRESOURCEDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCRESOURCEDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "LINKEDOSNAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Linked Resource",
            "longDescription": null
        },
        {
            "objectName": "OSLCRESOURCE",
            "targetObject": "OSLCRESOURCEDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Resource Details",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure Name",
            "remarks": "Identifies the object structure to which the OSLC resource belongs. This value must be unique and the object structure can be tied only to one resource.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": true,
            "persistent": true,
            "title": "Hierarchy Path",
            "remarks": "The parent object details of the current object detail node. The value is populated based on the object structure that is specified. ",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "LINKEDOSNAME",
            "required": false,
            "persistent": true,
            "title": "OSLC Linked Resource",
            "remarks": "The OSLC linked resource name.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "OSLCPROPNAME",
            "required": false,
            "persistent": true,
            "title": "OSLC Resource Property Name",
            "remarks": "The name of the property for the object in the resource's object structure. The default value is the object name in lowercase.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCPROPVALUENAME",
            "required": false,
            "persistent": true,
            "title": "OSLC Resource Property Value Name",
            "remarks": "The value of the property name for the object in the resource's object structure.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCPROPNS",
            "required": false,
            "persistent": true,
            "title": "OSLC Resource Property Namespace",
            "remarks": "The namespace to which the property name belongs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCPROPVALNS",
            "required": false,
            "persistent": true,
            "title": "OSLC Resource Property Value Namespace",
            "remarks": "The namespace to which the property value belongs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CARDINALITY",
            "required": false,
            "persistent": true,
            "title": "Cardinality",
            "remarks": "The cardinality of the relationship.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYMAP",
            "required": false,
            "persistent": true,
            "title": "Key Map",
            "remarks": "Key Map",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINK",
            "required": false,
            "persistent": true,
            "title": "Is Link?",
            "remarks": "Link",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETRELATION",
            "required": false,
            "persistent": true,
            "title": "Target Relation Name",
            "remarks": "Target Relation Name.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "MAXRELATIONSHIP"
        },
        {
            "attributeName": "ASSOCIATION",
            "required": false,
            "persistent": true,
            "title": "Is Association?",
            "remarks": "Association.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCRESOURCEDETAILID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEKEYMAPFORURI",
            "required": true,
            "persistent": true,
            "title": "Use Unique ID For URI",
            "remarks": "If the check box is selected, the unique ID value is used as the resource URI.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "OSOSLCMAP",
            "target": "OSOSLCMAP",
            "remarks": "Relation to OSLC Resource mapping. This relationship returns one or more rows.",
            "whereClause": "intobjectname=:intobjectname and hierarchypath=:hierarchypath",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCRESOURCEDETAIL",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relation to OSLC Resource mapping. This relationship returns one row.",
            "whereClause": "intobjectname=:intobjectname and hierarchypath=:hierarchypath",
            "cardinality": null
        },
        {
            "name": "OSLCRESOURCEDETAIL",
            "source": "OSLCRESOURCE",
            "remarks": "Relation to get all OSLC Resource details. This relationship returns one or more rows.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ]
}