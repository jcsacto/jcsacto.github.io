mos = {
    "objectName": "MAXPROPINSTANCE",
    "className": "psdi.app.system.MaxPropInstanceSet",
    "description": "View of MAXPROP where servername is not COMMOM",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "PROPNAME",
        "SERVERNAME",
        "SERVERHOST"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXPROP",
            "targetObject": "MAXPROPINSTANCE",
            "parentKeys": "PROPNAME",
            "targetKeys": "PROPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Property",
            "longDescription": null
        },
        {
            "objectName": "MAXPROPVALUE",
            "targetObject": "MAXPROPINSTANCE",
            "parentKeys": "MAXPROPVALUEID",
            "targetKeys": "MAXPROPVALUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Property Value",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXPROPINSTANCE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXPROPVALUEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "MAXPROPVALUEID",
            "sameAsObject": "MAXPROPVALUE",
            "viewColumnName": "MAXPROPVALUEID",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "MAXPROPVALUEID"
        },
        {
            "attributeName": "PROPNAME",
            "required": true,
            "persistent": true,
            "title": "Property Name",
            "remarks": "Property name; foreign key to MaxProp table.",
            "sameAsAttribute": "PROPNAME",
            "sameAsObject": "MAXPROP",
            "viewColumnName": "PROPNAME",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "PROPNAME"
        },
        {
            "attributeName": "SERVERNAME",
            "required": true,
            "persistent": true,
            "title": "Server",
            "remarks": "Server name.  For global property values, this will equal COMMON.",
            "sameAsAttribute": "SERVERNAME",
            "sameAsObject": "MAXSESSION",
            "viewColumnName": "SERVERNAME",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "SERVERNAME"
        },
        {
            "attributeName": "SERVERHOST",
            "required": false,
            "persistent": true,
            "title": "Server Host",
            "remarks": "The IP address of this server instance.  This will usually be null.  When server host is null, any server with the specified server name will use this property.  When server host is not null, the property will be used only by an instance having the same server name and IP address.",
            "sameAsAttribute": "SERVERHOST",
            "sameAsObject": "MAXSESSION",
            "viewColumnName": "SERVERHOST",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "SERVERHOST"
        },
        {
            "attributeName": "PROPVALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Property value (unencrypted).  Will be populated on the database when MaxProp.Encrypted is False.",
            "sameAsAttribute": "MAXIMODEFAULT",
            "sameAsObject": "MAXPROP",
            "viewColumnName": "PROPVALUE",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "PROPVALUE"
        },
        {
            "attributeName": "ENCRYPTEDVALUE",
            "required": false,
            "persistent": true,
            "title": "Encrypted Value",
            "remarks": "Encrypted property value.  Will be populated on the database when MaxProp.Encrypted is True.",
            "sameAsAttribute": "ENCRYPTEDVALUE",
            "sameAsObject": "MAXPROPVALUE",
            "viewColumnName": "ENCRYPTEDVALUE",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "ENCRYPTEDVALUE"
        },
        {
            "attributeName": "DISPPROPVALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "The decrypted value of the property, used in the Property application.",
            "sameAsAttribute": "MAXIMODEFAULT",
            "sameAsObject": "MAXPROP"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The User ID who last changed this row.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "CHANGEBY",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "CHANGEBY"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "The timestamp of the last change applied to this row.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "MAXPROPVALUE",
            "viewColumnName": "CHANGEDATE",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "ACCESSTYPE",
            "required": false,
            "persistent": true,
            "title": "Access Type",
            "remarks": "Access Type",
            "sameAsAttribute": "ACCESSTYPE",
            "sameAsObject": "MAXPROP",
            "viewColumnName": "ACCESSTYPE",
            "tableName": "MAXPROPVALUE",
            "tableColumnName": "ACCESSTYPE"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "servername  not in ('COMMON')"
    },
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXPROPINSTANCE",
            "source": "MAXPROP",
            "remarks": "Relationship for instance value",
            "whereClause": "propname = :propname",
            "cardinality": "UNDEFINED"
        }
    ]
}