mos = {
    "objectName": "DMMAPPINGATTRIBUTEVIEW",
    "className": "psdi.dm.virtual.DMMapAttributeSet",
    "description": "Add view for table in Define Mappings",
    "longDescription": null,
    "isView": true,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "OBJECTNAME",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "DMMAPPINGATTRIBUTEVIEW",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute to be added for mapping.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMMAPPINGATTRIBUTEVIEW",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object for Attribute to be added for mapping.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Object name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT",
            "viewColumnName": "OBJECTNAME",
            "tableName": "MAXATTRIBUTE",
            "tableColumnName": "OBJECTNAME"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Attribute name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE",
            "viewColumnName": "ATTRIBUTENAME",
            "tableName": "MAXATTRIBUTE",
            "tableColumnName": "ATTRIBUTENAME"
        },
        {
            "attributeName": "PERSISTENT",
            "required": true,
            "persistent": true,
            "title": "Persistent",
            "remarks": "When checked, indicates that this attribute (for a persistent view or table) is saved to the database.",
            "sameAsAttribute": "PERSISTENT",
            "sameAsObject": "MAXATTRIBUTE",
            "viewColumnName": "PERSISTENT",
            "tableName": "MAXATTRIBUTE",
            "tableColumnName": "PERSISTENT"
        },
        {
            "attributeName": "RESTRICTED",
            "required": true,
            "persistent": true,
            "title": "Restricted",
            "remarks": "Identifies whether the value of this attribute can be set only by methods local to the business object; for example, calculation of the value involves a method call on the Mbo.  When an attribute is restricted, external processes should not attempt to set a value directly.",
            "sameAsAttribute": "RESTRICTED",
            "sameAsObject": "MAXATTRIBUTE",
            "viewColumnName": "RESTRICTED",
            "tableName": "MAXATTRIBUTE",
            "tableColumnName": "RESTRICTED"
        },
        {
            "attributeName": "MAPPED",
            "required": false,
            "persistent": false,
            "title": "Replacement Required",
            "remarks": "Non Persistent for mapping flag.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREVMAPPED",
            "required": false,
            "persistent": false,
            "title": "Replacement Required",
            "remarks": "Non Persistent for previous mapped flag.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Remarks for the Migration Mapping",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREVREMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Remarks for the Migration Mapping",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "1=1",
        "viewselect": "select matt.objectname, matt.attributename, matt.persistent, matt.restricted",
        "viewfrom": "from maxattribute matt"
    },
    "outgoingRelationships": [],
    "incomingRelationships": []
}