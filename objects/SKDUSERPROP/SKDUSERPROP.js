mos = {
    "objectName": "SKDUSERPROP",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDUserPropSet",
    "description": "Table to store user specific properties",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDUSERPROPID",
    "primaryKeyColumns": [
        "PROJECTNAME",
        "PROPERTYNAME",
        "SKDOBJECTNAME",
        "USERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SKDUSERPROP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SKDOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDUSERPROP",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDUSERPROP",
            "parentKeys": "NAME",
            "targetKeys": "PROJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User Properties for Project",
            "longDescription": null
        },
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
            "remarks": "Property Name",
            "sameAsAttribute": "PROPERTYNAME",
            "sameAsObject": "SKDPROPERTY"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User Identifier",
            "remarks": "User Identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PROJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Scheduler Project Name",
            "remarks": "Scheduler Project Name",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "SHOWTABLE",
            "required": true,
            "persistent": true,
            "title": "Show table",
            "remarks": "Flag to indicate if tables will be shown or not.",
            "sameAsAttribute": "SHOWTABLE",
            "sameAsObject": "SKDPROPERTY"
        },
        {
            "attributeName": "PROPERTYORDER",
            "required": true,
            "persistent": true,
            "title": "Property Order",
            "remarks": "Property display order",
            "sameAsAttribute": "PROPERTYORDER",
            "sameAsObject": "SKDPROPERTY"
        },
        {
            "attributeName": "FILTERABLE",
            "required": true,
            "persistent": true,
            "title": "Is filterable",
            "remarks": "Flag to indicate if property is filterable or not.",
            "sameAsAttribute": "FILTERABLE",
            "sameAsObject": "SKDPROPERTY"
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
            "attributeName": "SKDUSERPROPID",
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
            "sameAsAttribute": "CANBESORTED",
            "sameAsObject": "SKDPROPERTY"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDUSERPROP",
            "source": "SKDPROJECT",
            "remarks": "User properties defined for a project",
            "whereClause": "projectname=:name",
            "cardinality": null
        },
        {
            "name": "SKDUSERPROPS",
            "source": "SKDPROJECT",
            "remarks": "User properties defined for a project",
            "whereClause": "projectname=:name and userid=:&USERNAME&",
            "cardinality": null
        },
        {
            "name": "SKDUSERPROP",
            "source": "SKDPROPERTY",
            "remarks": "Relationship from SKDProperty to SKDUserPrope table.",
            "whereClause": "propertyname=:propertyname and skdobjectname=:skdobjectname",
            "cardinality": null
        }
    ]
}