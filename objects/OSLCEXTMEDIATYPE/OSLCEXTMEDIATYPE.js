mos = {
    "objectName": "OSLCEXTMEDIATYPE",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.provider.OslcExtensionMediatypeSet",
    "description": "OSLC Extension to Media type mapping",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "OSLCEXTMEDIATYPEID",
    "primaryKeyColumns": [
        "EXTENSION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "EXTENSION",
            "required": true,
            "persistent": true,
            "title": "File extension",
            "remarks": "File extension that identifies the Internet media type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEDIATYPE",
            "required": true,
            "persistent": true,
            "title": "Internet media type",
            "remarks": "Internet media type identifier, usualy &quot;&lt;type&gt;/&lt;subtype&gt;[+&lt;suffix&gt;]&quot; formatted.         Subtypes starting with &aposvnd.&apos; are vendor defined while subtypes starting with &aposx.&apos; are unregistered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAIN",
            "required": true,
            "persistent": true,
            "title": "Preferred",
            "remarks": "If the filetype is the preferred for the Internet media type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description for the Internet media Type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCEXTMEDIATYPEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}