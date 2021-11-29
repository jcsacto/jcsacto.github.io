mos = {
    "objectName": "COMMTMPLTSENDTO",
    "className": "psdi.common.commtmplt.CommTmpltSendToSet",
    "description": "Recipients of communications defined in templates.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMMTMPLTSENDTOID",
    "primaryKeyColumns": [
        "TEMPLATEID",
        "TYPE",
        "SENDTOVALUE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "COMMTMPLTSENDTO",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The list of addresses to send the communication to.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template ",
            "remarks": "Unique Id of the communication template",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "The type of recipient.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDTO",
            "required": true,
            "persistent": true,
            "title": "To",
            "remarks": "Specifies whether the communication is directly intended for the recipient(s). If the check box is selected, Maximo places the recipient(s) in the To field of the communication. If the check box is cleared (the default), Maximo does not place the recipient(s) in the To field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CC",
            "required": true,
            "persistent": true,
            "title": "cc",
            "remarks": "Specifies whether the communication is to be copied to the recipient. If the check box is selected, Maximo places the recipient(s) in the cc field of the communication. If the check box is cleared (the default), Maximo does not place the recipient(s) in the cc field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BCC",
            "required": true,
            "persistent": true,
            "title": "bcc",
            "remarks": "Specifies whether the communication is to be copied to this recipient without the knowledge of the other recipients. If the check box is selected, Maximo places the recipient(s) in the bcc field of the communication. If the check box is cleared (the default), Maximo does not place the recipient(s) in the bcc field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISBROADCAST",
            "required": true,
            "persistent": true,
            "title": "Broadcast",
            "remarks": "Specifies whether to send the communication to all members in the person group. If the check box is selected (the default), Maximo sends the communication to everyone in the group. If the check box is cleared, Maximo resolves the group to a single individual based on calendars (that is, a person who is currently on shift and working). Maximo then sends the communication to that one person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDTOVALUE",
            "required": false,
            "persistent": true,
            "title": "E-mail",
            "remarks": "E-mail address to which you are sending the communication, typically used when the recipient does not exist as a person record in Maximo.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": false,
            "persistent": false,
            "title": "Person",
            "remarks": "Identifies the person or people to which you are sending the communication.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "GROUPID",
            "required": false,
            "persistent": false,
            "title": "Person Group",
            "remarks": "Identifies the group of people to which you are sending the communication. If you select the Broadcast? option, Maximo sends the communication to all members in the group. If you do not select the Broadcast? option, Maximo resolves the group to a single individual based on calendars (that is, a person who is currently on shift and working). Maximo then sends the communication to that one person.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "ROLEID",
            "required": false,
            "persistent": false,
            "title": "Role",
            "remarks": "Identifies the role that to which you are sending the communication. Maximo resolves this role to a single person. For example, you may have a value for WOLEAD, which resolves to the lead person on a work order.",
            "sameAsAttribute": "MAXROLE",
            "sameAsObject": "MAXROLE"
        },
        {
            "attributeName": "COMMTMPLTSENDTOID",
            "required": true,
            "persistent": true,
            "title": "COMMTMPLTSENDTOID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMTMPLTSENDTO_ROLE",
            "target": "MAXROLE",
            "remarks": "Relationship to the MAXROLE table, used to get the role records for a recipient.",
            "whereClause": "maxrole=:sendtovalue",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTSENDTO_PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the PERSON table, used to get the person record for a recipient.",
            "whereClause": "personid=:sendtovalue",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTSENDTO_GROUP",
            "target": "PERSONGROUP",
            "remarks": "Relationship to the persongroups table, used to get the person group records",
            "whereClause": "persongroup=:sendtovalue",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMTMPLT_BCC",
            "source": "COMMTEMPLATE",
            "remarks": " Relationship to the COMMTMPLTSENDTO table, used to find all BCC recipients.",
            "whereClause": "templateid=:templateid and bcc=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_CC",
            "source": "COMMTEMPLATE",
            "remarks": " Relationship to the COMMTMPLTSENDTO table, used to find all CC recipients.",
            "whereClause": "templateid=:templateid and cc=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTO",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of a commtemplate.",
            "whereClause": "templateid=:templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTOEMAIL",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of type EMAIL's for a commtemplate.",
            "whereClause": "templateid=:templateid and type='EMAIL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTOGROUP",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of type GROUP for a commtemplate.",
            "whereClause": "templateid=:templateid and type='GROUP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTOPERSON",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of type PERSON for a commtemplate.",
            "whereClause": "templateid=:templateid and type='PERSON'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTOROLE",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of type ROLE for a commtemplate.",
            "whereClause": "templateid=:templateid and type='ROLE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_TO",
            "source": "COMMTEMPLATE",
            "remarks": " Relationship to the COMMTMPLTSENDTO table, used to find all TO recipients.",
            "whereClause": "templateid=:templateid and sendto=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPUSEDBYCOMMTEMPLATE",
            "source": "PERSONGROUP",
            "remarks": "returns any rows if used by communications templates",
            "whereClause": "type ='GROUP' and sendtovalue=:persongroup",
            "cardinality": "UNDEFINED"
        }
    ]
}