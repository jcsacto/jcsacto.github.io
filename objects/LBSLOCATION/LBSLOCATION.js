mos = {
    "objectName": "LBSLOCATION",
    "className": "com.ibm.tivoli.maximo.map.LBSLocationSet",
    "description": "Table to store the location of an entity",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LBSLOCATIONID",
    "primaryKeyColumns": [
        "LBSLOCATIONID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "LBSLOCATION",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "LBS Locations",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LBSLOCATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LBSLOCATION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 124",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "LBSLOCATION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Orders",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LBSLOCATIONID",
            "required": true,
            "persistent": true,
            "title": "LBS Location ID",
            "remarks": "Unique id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFOBJECT",
            "required": true,
            "persistent": true,
            "title": "Reference Object",
            "remarks": "Reference Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "KEY1",
            "required": true,
            "persistent": true,
            "title": "KEY1",
            "remarks": "first key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEY2",
            "required": false,
            "persistent": true,
            "title": "KEY2",
            "remarks": "second key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LONGITUDE",
            "required": false,
            "persistent": true,
            "title": "Longitude",
            "remarks": "Longitude",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LATITUDE",
            "required": false,
            "persistent": true,
            "title": "Latitude",
            "remarks": "Latitude",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALTITUDE",
            "required": false,
            "persistent": true,
            "title": "Altitude",
            "remarks": "Altitude",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATIONACCURACY",
            "required": false,
            "persistent": true,
            "title": "Accuracy",
            "remarks": "Accuracy",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALTITUDEACCURACY",
            "required": false,
            "persistent": true,
            "title": "Altitude accuracy",
            "remarks": "Altitude accuracy",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HEADING",
            "required": false,
            "persistent": true,
            "title": "Heading",
            "remarks": "Heading",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPEED",
            "required": false,
            "persistent": true,
            "title": "Speed",
            "remarks": "Speed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTUPDATE",
            "required": false,
            "persistent": true,
            "title": "Location Timestamp",
            "remarks": "Location Timestamp",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Workorder",
            "remarks": "The workorder that the user is working on when they click start timer.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site of the workorder that the customer is working on when they click the start/stop timer",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "KEY3",
            "required": false,
            "persistent": true,
            "title": "KEY3",
            "remarks": "third key",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to find what workorder was being worked on from the LBSLOCATION",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LBSLOCATION",
            "source": "AMCREW",
            "remarks": "Relationship to find the lbslocation from a crew",
            "whereClause": "refobject='AMCREW' and key1 =:orgid and key2 =:amcrew",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LBSLOCATION",
            "source": "ASSET",
            "remarks": "Relationship to find the lbslocation from an asset",
            "whereClause": "refobject='ASSET' and key1 =:orgid and key2 =:assetnum and key3 =:siteid",
            "cardinality": null
        },
        {
            "name": "LBSLOCATION",
            "source": "LABOR",
            "remarks": "Relationship to find the lbslocation from a labor",
            "whereClause": "refobject='LABOR' and key1 =:orgid and key2 =:laborcode",
            "cardinality": null
        },
        {
            "name": "LBSLOCATION",
            "source": "WORKORDER",
            "remarks": "Relationship to find the the LBSLocations based on a workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        }
    ]
}