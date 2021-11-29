mos = {
    "objectName": "MAXSYSKEYS",
    "className": "psdi.app.configure.MaxSysKeysSet",
    "description": "The MAXSYSKEYS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXSYSKEYSID",
    "primaryKeyColumns": [
        "IXNAME",
        "COLNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSYSKEYS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "COLNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 99",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSYSKEYS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "IXNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 100",
            "longDescription": null
        },
        {
            "objectName": "MAXSYSINDEXES",
            "targetObject": "MAXSYSKEYS",
            "parentKeys": "NAME",
            "targetKeys": "IXNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The keys of the index.",
            "longDescription": "The keys are columns of the table indexed."
        }
    ],
    "columns": [
        {
            "attributeName": "IXNAME",
            "required": true,
            "persistent": true,
            "title": "Index",
            "remarks": "Index Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "COLNAME",
            "required": true,
            "persistent": true,
            "title": "Column",
            "remarks": "Column Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "COLSEQ",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Column Sequence Within This Index",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERING",
            "required": true,
            "persistent": true,
            "title": "Ordering",
            "remarks": "Column Ordering (A=Ascending, D=Descending)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGED",
            "required": false,
            "persistent": true,
            "title": "Changed",
            "remarks": "Index Column Altered by Configure? (Y or N)",
            "sameAsAttribute": "CHANGED",
            "sameAsObject": "MAXOBJECTCFG"
        },
        {
            "attributeName": "ASCENDING",
            "required": true,
            "persistent": false,
            "title": "Ascending",
            "remarks": "When checked, indicates that this is an ascending key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWCHANGED",
            "required": false,
            "persistent": false,
            "title": "Changed",
            "remarks": "Value of \"changed\" translated for readability.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXSYSKEYSID",
            "required": true,
            "persistent": true,
            "title": "Maxsyskeys Id",
            "remarks": "Uniqueid column",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXSYSKEYS",
            "source": "MAXSYSINDEXES",
            "remarks": "Relationship to MaxSysKeys table. (maxsyskeys.ixname = maxsysindexes.name). The result set will contain one or more objects.",
            "whereClause": "ixname = :name",
            "cardinality": "UNDEFINED"
        }
    ]
}