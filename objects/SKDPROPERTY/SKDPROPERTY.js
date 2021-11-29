mos = {
    "objectName": "SKDPROPERTY",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDPropertySet",
    "description": "Attribute Mapping",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDPROPERTYID",
    "primaryKeyColumns": [
        "PROPERTYNAME",
        "SKDOBJECTNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "SKDPROPERTY",
            "targetObject": "SKDUSERPROP",
            "parentKeys": "PROPERTYNAME, SKDOBJECTNAME",
            "targetKeys": "PROPERTYNAME, SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Property",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDPROPERTY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 176",
            "longDescription": null
        }
    ],
    "columns": [
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
            "attributeName": "PROPERTYNAME",
            "required": true,
            "persistent": true,
            "title": "Property Name",
            "remarks": "The name of the property available for display in the Gantt view. This value must be unique.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Class Name",
            "remarks": "Bean class that can load the data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSISTENT",
            "required": true,
            "persistent": true,
            "title": "Is Persistent",
            "remarks": "Indicates if the current property is stored with the schedule, or is referenced from the business object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Is Internal",
            "remarks": "Is it an internal property?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERMANAGED",
            "required": true,
            "persistent": true,
            "title": "Is User Managed",
            "remarks": "Is it a user managed property?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": true,
            "title": "Title",
            "remarks": "The column title that will display in the data table of the Gantt view.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "HASAPPLINK",
            "required": true,
            "persistent": true,
            "title": "Has applink",
            "remarks": "Indicates if this property will include a hyperlink to an application. The hyperlink location is determined by the value in the Applink Object field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWTABLE",
            "required": true,
            "persistent": true,
            "title": "Show in Gantt View table",
            "remarks": "Indicates if this property will display in the Gantt view",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPERTYORDER",
            "required": true,
            "persistent": true,
            "title": "Display Order",
            "remarks": "The order in which the columns will display in the data table of the Gantt view, from left to right.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERABLE",
            "required": true,
            "persistent": true,
            "title": "Is filterable",
            "remarks": "Flag to indicate if property is filterable or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALWAYSVISIBLE",
            "required": true,
            "persistent": true,
            "title": "Always visible",
            "remarks": "Indicates if this property will always be displayed in the Gantt view. This value is read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLUMNWIDTH",
            "required": false,
            "persistent": true,
            "title": "Column Width",
            "remarks": "Width of the column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDPROPERTYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANBESORTED",
            "required": true,
            "persistent": true,
            "title": "Can Be Sorted",
            "remarks": "If enabled this property can be sortable, and displays in the Sort By combination box in the Gantt view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": true,
            "title": "Language code",
            "remarks": "Language code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANBEGROUPED",
            "required": true,
            "persistent": true,
            "title": "Can be Grouped",
            "remarks": "If enabled this property can be grouped, and displays in the Group By menu in the Gantt view.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "FWMRESPROPERTY",
            "target": "SKDPROPERTY",
            "remarks": "Dispatch Resource related properties.",
            "whereClause": "SKDOBJECTNAME='FWMRESOURCE' and USERMANAGED=1 and PROPERTYORDER >=1",
            "cardinality": null
        },
        {
            "name": "SKDACTPROPERTY",
            "target": "SKDPROPERTY",
            "remarks": "To get Activity related properties.",
            "whereClause": "SKDOBJECTNAME='SKDACTIVITY' and USERMANAGED=1 and PROPERTYORDER >=1",
            "cardinality": null
        },
        {
            "name": "SKDRESPROPERTY",
            "target": "SKDPROPERTY",
            "remarks": "Resource related properties.",
            "whereClause": "SKDOBJECTNAME='SKDRESOURCE' and USERMANAGED=1 and PROPERTYORDER >=1",
            "cardinality": null
        },
        {
            "name": "SKDRESPROPERTYMAP",
            "target": "SKDPROPERTYMAP",
            "remarks": "Relationship from SKDProperty to SKDPropertyMap to find Resources",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        },
        {
            "name": "SKDACTPROPERTYMAP",
            "target": "SKDPROPERTYMAP",
            "remarks": "Relationship from SKDProperty to SKDPropertyMap to find Activities.",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        },
        {
            "name": "SKDPROPERTYMAP",
            "target": "SKDPROPERTYMAP",
            "remarks": "Relationship from SKDProperty to SKDPropertyMap table.",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        },
        {
            "name": "FWMRESPROPERTYMAP",
            "target": "SKDPROPERTYMAP",
            "remarks": "Relationship from SKDProperty to SKDPropertyMap to find Dispatch Resources",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        },
        {
            "name": "SKDUSERPROP",
            "target": "SKDUSERPROP",
            "remarks": "Relationship from SKDProperty to SKDUserPrope table.",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SKDPROJPROPERTY",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDProject to SKDProperty",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "FWMRESPROPERTY",
            "source": "SKDPROPERTY",
            "remarks": "Dispatch Resource related properties.",
            "whereClause": "SKDOBJECTNAME='FWMRESOURCE' and USERMANAGED=1 and PROPERTYORDER >=1",
            "cardinality": null
        },
        {
            "name": "SKDACTPROPERTY",
            "source": "SKDPROPERTY",
            "remarks": "To get Activity related properties.",
            "whereClause": "SKDOBJECTNAME='SKDACTIVITY' and USERMANAGED=1 and PROPERTYORDER >=1",
            "cardinality": null
        },
        {
            "name": "SKDRESPROPERTY",
            "source": "SKDPROPERTY",
            "remarks": "Resource related properties.",
            "whereClause": "SKDOBJECTNAME='SKDRESOURCE' and USERMANAGED=1 and PROPERTYORDER >=1",
            "cardinality": null
        }
    ]
}