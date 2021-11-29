mos = {
    "objectName": "MAXLOOKUPMAP",
    "className": "psdi.app.system.MaxLookupMapSet",
    "description": "Multi-key foreign key attribute mapping for lookup",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLOOKUPMAPID",
    "primaryKeyColumns": [
        "TARGET",
        "LOOKUPATTR",
        "TARGETATTR",
        "SOURCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SOURCE, LOOKUPATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Look Up Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SOURCE, SOURCEKEY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "SOURCE, TARGETATTR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TARGET, LOOKUPATTR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TARGET, SOURCEKEY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TARGET, TARGETATTR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Attribute",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXLOOKUPMAP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TARGET",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TARGET",
            "required": true,
            "persistent": true,
            "title": "Target Table",
            "remarks": "The table of which the attribute's value is being looked up",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LOOKUPATTR",
            "required": true,
            "persistent": true,
            "title": "Lookup Attribute",
            "remarks": "The attribute that is being looked up",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "TARGETATTR",
            "required": true,
            "persistent": true,
            "title": "Target Attribute",
            "remarks": "The attribute which will be set when lookup returns",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SOURCEKEY",
            "required": true,
            "persistent": true,
            "title": "Source Key",
            "remarks": "The key field of the lookup table which whose value will be returned",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SEQNUM",
            "required": true,
            "persistent": true,
            "title": "Sequence ",
            "remarks": "The order of how the attributes will be set on the target record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWNULL",
            "required": true,
            "persistent": true,
            "title": "Allow Null",
            "remarks": "Indicate whether null is allowed for this attribute when the lookup attribute is set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLOOKUPMAPID",
            "required": true,
            "persistent": true,
            "title": "MAXLOOKUPMAPID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": true,
            "persistent": true,
            "title": "Source Object",
            "remarks": "Source Object Name which the lookup is agaist or app link points to.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXLOOKUPMAP",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to get all the kep map entries for the maxattributecfg record. target=:objectname and lookupattr=:attributename",
            "whereClause": "target=:objectname and lookupattr=:attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXLOOKUPMAP",
            "source": "MAXDOMAIN",
            "remarks": null,
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}