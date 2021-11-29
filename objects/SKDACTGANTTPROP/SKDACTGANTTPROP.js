mos = {
    "objectName": "SKDACTGANTTPROP",
    "className": "com.ibm.tivoli.maximo.skd.app.virtual.SKDActGanttPropSet",
    "description": "The Gantt View Properties Setup Table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SKDOBJECTNAME",
            "required": true,
            "persistent": false,
            "title": "Scheduler Object Name",
            "remarks": "The location where data will be stored in Scheduler.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PROPERTYNAME",
            "required": true,
            "persistent": false,
            "title": "Property",
            "remarks": "The name of the property entered in the Configure Gantt View Properties: Default Settings window. This value is read-only.",
            "sameAsAttribute": "PROPERTYNAME",
            "sameAsObject": "SKDPROPERTY"
        },
        {
            "attributeName": "SHOWTABLE",
            "required": true,
            "persistent": false,
            "title": "Show in Gantt View table",
            "remarks": "Indicates if this property will display in the Gantt view.",
            "sameAsAttribute": "SHOWTABLE",
            "sameAsObject": "SKDPROPERTY"
        },
        {
            "attributeName": "PROPERTYORDER",
            "required": true,
            "persistent": false,
            "title": "Display Order",
            "remarks": "The order in which the columns will display in the data table of the Gantt view, from left to right.",
            "sameAsAttribute": "PROPERTYORDER",
            "sameAsObject": "SKDPROPERTY"
        },
        {
            "attributeName": "FILTERABLE",
            "required": true,
            "persistent": false,
            "title": "Filterable",
            "remarks": "Flag to indicate if property is filterable or not.",
            "sameAsAttribute": "FILTERABLE",
            "sameAsObject": "SKDPROPERTY"
        },
        {
            "attributeName": "PROJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Scheduler Project Name",
            "remarks": "Scheduler Project Name",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "MODIFIED",
            "required": true,
            "persistent": false,
            "title": "Modified",
            "remarks": "Has this record been modified?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANBESORTED",
            "required": true,
            "persistent": false,
            "title": "Can Be Sorted",
            "remarks": "If enabled this property can be sortable, and displays in the Sort By combination box in the Gantt view.",
            "sameAsAttribute": "CANBESORTED",
            "sameAsObject": "SKDPROPERTY"
        },
        {
            "attributeName": "COLUMNWIDTH",
            "required": false,
            "persistent": false,
            "title": "Column Width",
            "remarks": "Display width of the column",
            "sameAsAttribute": "COLUMNWIDTH",
            "sameAsObject": "SKDPROPERTY"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDACTGANTTPROP",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDProject to the non persistent object SKDActGanttProp",
            "whereClause": null,
            "cardinality": null
        }
    ]
}