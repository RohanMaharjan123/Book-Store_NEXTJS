from django.contrib import admin
from .models import Bookstore, Author, Category, Publisher, Book, Customer, Review


@admin.register(Bookstore)
class BookstoreAdmin(admin.ModelAdmin):
    list_display = ("name", "owner", "location", "contact_email")
    search_fields = ("name", "owner__username")


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title",)


@admin.register(Publisher)
class PublisherAdmin(admin.ModelAdmin):
    list_display = ("name", "website")
    search_fields = ("name",)


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "published_date")
    list_filter = ("publisher", "category")
    search_fields = ("title", "isbn")


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("user", "phone_number")
    search_fields = ("user__username", "phone_number")


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("book", "user", "rating", "created_at")
    search_fields = ("book__title", "user__username")
    list_filter = ("rating",)