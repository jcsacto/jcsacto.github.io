mos = {
    "objectName": "MAXPROPVALUE",
    "className": "psdi.app.system.MaxPropValueSet",
    "description": "Maximo Property Values",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXPROPVALUEID",
    "primaryKeyColumns": [
        "PROPNAME",
        "SERVERNAME",
        "SERVERHOST"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXPROPVALUE",
            "targetObject": "MAXPROPINSTANCE",
            "parentKeys": "MAXPROPVALUEID",
            "targetKeys": "MAXPROPVALUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Property Value",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXPROP",
            "targetObject": "MAXPROPVALUE",
            "parentKeys": "PROPNAME",
            "targetKeys": "PROPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Property",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXPROPVALUE",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPNAME",
            "required": true,
            "persistent": true,
            "title": "Property Name",
            "remarks": "Property name; foreign key to MaxProp table.",
            "sameAsAttribute": "PROPNAME",
            "sameAsObject": "MAXPROP"
        },
        {
            "attributeName": "SERVERNAME",
            "required": true,
            "persistent": true,
            "title": "Server",
            "remarks": "Server name.  For global property values, this will equal COMMON.",
            "sameAsAttribute": "SERVERNAME",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "SERVERHOST",
            "required": false,
            "persistent": true,
            "title": "Server Host",
            "remarks": "The IP address of this server instance.  This will usually be null.  When server host is null, any server with the specified server name will use this property.  When server host is not null, the property will be used only by an instance having the same server name and IP address.",
            "sameAsAttribute": "SERVERHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "PROPVALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Property value (unencrypted).  Will be populated on the database when MaxProp.Encrypted is False.",
            "sameAsAttribute": "MAXIMODEFAULT",
            "sameAsObject": "MAXPROP"
        },
        {
            "attributeName": "ENCRYPTEDVALUE",
            "required": false,
            "persistent": true,
            "title": "Encrypted Value",
            "remarks": "Encrypted property value.  Will be populated on the database when MaxProp.Encrypted is True.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "The timestamp of the last change applied to this row.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCESSTYPE",
            "required": false,
            "persistent": true,
            "title": "Access Type",
            "remarks": "Access Type",
            "sameAsAttribute": "ACCESSTYPE",
            "sameAsObject": "MAXPROP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXPROP",
            "target": "MAXPROP",
            "remarks": "Relationship from MaxPropValue to MaxProp.",
            "whereClause": "propname = :propname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXPROPINSVAL",
            "source": "MAXPROP",
            "remarks": "Relationship for instance value",
            "whereClause": "propname = :propname and servername not in ('COMMON')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROPVALUE",
            "source": "MAXPROP",
            "remarks": "Relationship from MaxProp to MaxPropValue.",
            "whereClause": "propname = :propname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROPGLOB",
            "source": "MAXPROP",
            "remarks": "Relationship for global value",
            "whereClause": "propname = :propname and servername = 'COMMON'",
            "cardinality": "UNDEFINED"
        }
    ]
}