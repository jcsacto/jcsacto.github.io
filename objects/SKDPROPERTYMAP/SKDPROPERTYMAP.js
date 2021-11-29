mos = {
    "objectName": "SKDPROPERTYMAP",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDPropertyMapSet",
    "description": "Mapping table for property and objectname",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROPERTYMAPID",
    "primaryKeyColumns": [
        "PROPERTYNAME",
        "OBJECTNAME",
        "SKDOBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "APPLINKOBJECT, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "APPLINKOBJECT, SKDATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Column",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, SKDATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SKDOBJECTNAME, ATTRIBUTENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SKDOBJECTNAME, SKDATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Column",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "APPLINKOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Main Object type of Application to open hyperlink",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 178",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROPERTYMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 179",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "The business object from which the data will be pulled for display in the Gantt view.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SKDOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Scheduler Object Name",
            "remarks": "The location where data will be stored in Scheduler.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SKDATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Scheduler Attribute Name",
            "remarks": "The location where data (column name) will be stored. This value is used only if Is Persistent? Is selected.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "The business object attribute from which the data will be pulled for display in the Gantt view.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "PROPERTYNAME",
            "required": true,
            "persistent": true,
            "title": "Property Name",
            "remarks": "The name of the property available for display in the Gantt view. This value is read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLINKOBJECT",
            "required": false,
            "persistent": true,
            "title": "Applink Object",
            "remarks": "If you selected the Has Applink? checkbox, the application to which the hyperlink will go.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SKDPROPERTYMAPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDRESPROPERTYMAP",
            "source": "SKDPROPERTY",
            "remarks": "Relationship from SKDProperty to SKDPropertyMap to find Resources",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        },
        {
            "name": "SKDACTPROPERTYMAP",
            "source": "SKDPROPERTY",
            "remarks": "Relationship from SKDProperty to SKDPropertyMap to find Activities.",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        },
        {
            "name": "SKDPROPERTYMAP",
            "source": "SKDPROPERTY",
            "remarks": "Relationship from SKDProperty to SKDPropertyMap table.",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        },
        {
            "name": "FWMRESPROPERTYMAP",
            "source": "SKDPROPERTY",
            "remarks": "Relationship from SKDProperty to SKDPropertyMap to find Dispatch Resources",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        }
    ]
}