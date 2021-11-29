mos = {
    "objectName": "OSOSLCMAP",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OsOslcMapSet",
    "description": "Table oslc mapping",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSOSLCMAPID",
    "primaryKeyColumns": [
        "INTOBJECTNAME",
        "HIERARCHYPATH",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSOSLCMAP",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSOSLCMAP",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "LINKOSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Object Structure",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
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
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "The resource attribute name that can be mapped to an OSLC property.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LINKOSNAME",
            "required": false,
            "persistent": true,
            "title": "Linked Object Structure Name",
            "remarks": "The name of the related resource for the OSLC property.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "LINKRELATION",
            "required": false,
            "persistent": true,
            "title": "Relation Name",
            "remarks": "The relationship that links the main object of the resource to the main object of the linked object structure.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "MAXRELATIONSHIP"
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "OSLC Property Required",
            "remarks": "When the check box is selected, an OSLC property is required in the input document.",
            "sameAsAttribute": "REQUIRED",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "OSLCPROPNAME",
            "required": true,
            "persistent": true,
            "title": "OSLC Property Name",
            "remarks": "The OSLC property name that is mapped from a resource attribute.",
            "sameAsAttribute": "OSLCPROPNAME",
            "sameAsObject": "OSLCRESOURCEDETAIL"
        },
        {
            "attributeName": "OSLCPROPNS",
            "required": true,
            "persistent": true,
            "title": "OSLC Property Namespace",
            "remarks": "The namespace of the OSLC property name.",
            "sameAsAttribute": "OSLCPROPNS",
            "sameAsObject": "OSLCRESOURCEDETAIL"
        },
        {
            "attributeName": "RESOURCEREF",
            "required": true,
            "persistent": true,
            "title": "Resource Reference",
            "remarks": "Indicates whether the property is a reference to a resource.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYMAP",
            "required": false,
            "persistent": true,
            "title": "Key Map",
            "remarks": "The mapping between the first object in the linked object structure and the main object for the OSLC resource.",
            "sameAsAttribute": "KEYMAP",
            "sameAsObject": "OSLCRESOURCEDETAIL"
        },
        {
            "attributeName": "OSOSLCMAPID",
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
            "title": "Use Key Map For URI",
            "remarks": "Use Key Map For URI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEOBJECT",
            "required": false,
            "persistent": false,
            "title": "Source Object Name",
            "remarks": "The name of the source object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TARGETOBJECT",
            "required": false,
            "persistent": false,
            "title": "Target Object Name",
            "remarks": "The name of the target object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "OSLCCOMMONPROPS",
            "target": "OSLCCOMMONPROPS",
            "remarks": "Relation to get all OSLC Common Proprties. This relationship returns 0 or more rows.",
            "whereClause": "oslcpropname=:oslcpropname and oslcpropns=:oslcpropns",
            "cardinality": null
        },
        {
            "name": "OSLCKEYMAP",
            "target": "OSLCKEYMAP",
            "remarks": "Relation to OSLC Key Map Non-persistent Object.",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSOSLCMAP",
            "source": "OSLCRESOURCEDETAIL",
            "remarks": "Relation to OSLC Resource mapping. This relationship returns one or more rows.",
            "whereClause": "intobjectname=:intobjectname and hierarchypath=:hierarchypath",
            "cardinality": null
        }
    ]
}