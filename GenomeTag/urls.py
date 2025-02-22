from django.urls import path
from . import views
from .views import SignUpView
from . import views

app_name = "GenomeTag"

urlpatterns = [
    path("", views.main, name="main"),
    path("", views.main, name="base"),
    path("userPermission/", views.userPermission, name="userPermission"),
    path("signup/", SignUpView.as_view(), name="signup"),
    path("informations/", views.log_info, name="log_info"),
    path("addfile/", views.addfile, name="addfile"),
    path("annotations/", views.annotations, name="annotations"),
    path("attributions/", views.attributions, name="attributions"),
    path("reviews_list/", views.reviews_list, name="reviews_list"),
    path("forum/", views.forum_main, name="forum_main"),
    path("forum/<int:topic_id>/", views.topic, name="topic"),
    path("like/<int:message_id>/", views.like_message, name="like_message"),
    path("create/", views.create, name="create"),
    path("search/", views.search, name="search"),
    path("review/<str:id>/", views.review_add, name="display_review"),
    path("result/", views.result, name="result"),
    path("create/create_peptide", views.create_peptide, name="create_peptide"),
    path(
        "create/create_annotation/<int:attribution_id>/",
        views.create_annotation,
        name="create_annotation",
    ),
    path(
        "create/modify_annotation/<str:annotation_id>/",
        views.modify_annotation,
        name="modify_annotation",
    ),
    path("delete_annotation/<int:attribution_id>/", views.delete_annotation, name="delete_annotation"),
    path("result/Genome/<str:id>/", views.genome, name="display_genome"),
    path("result/Genome/<str:genome_id>/<str:id>/", views.chromosome, name="display_chromosome"),
    path("result/Peptide/<str:id>/", views.peptide, name="display_peptide"),
    path("result/Annotation/<str:id>/", views.annotation, name="display_annotation"),
    path("result/Tag/<str:id>/", views.tag, name="display_tag"),
    path("download_fasta/<str:genome_id>/", views.download_fasta, name="download_fasta"),
    path(
        "download_fasta/<str:genome_id>/<str:chromosome_id>/",
        views.download_fasta_single_chromosome,
        name="download_fasta_single_chromosome",
    ),
    path(
        "download_peptide_fasta/<int:peptide_id>/",
        views.download_peptide_fasta,
        name="download_peptide_fasta",
    ),
    path(
        "download_annotation_fasta/<str:annotation_id>/",
        views.download_annotation_fasta,
        name="download_annotation_fasta",
    ),
    path(
        "download_all_annotation_fasta/<str:genome_id>/<str:chromosome_id>/",
        views.download_all_annotation_fasta,
        name="download_all_annotation_fasta",
    ),
    path("create/create_attribution/", views.create_attribution, name="create_attribution"),
    path("blast/", views.blast, name="blast"),
    path("blast_result/", views.blast_result, name="blast_result"),
    path("alternative_database/", views.alternative_database, name="alternative_database"),
    path("role_change/", views.role_change_request, name="role_change"),
    path("mailbox/", views.mailbox, name="mailbox"),
    path("compose/", views.compose_email, name="compose_email"),
    path("mailbox/<int:message_id>/", views.message_detail, name="message_detail"),
    path("mailbox/<int:message_id>/delete/", views.delete_message, name="delete_message"),
]
